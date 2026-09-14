#!/usr/bin/env bash
# Convert HEIC/HEIF images in the about carousel to web-ready JPEGs,
# then strip metadata from every image in the carousel directory.
#
# Verifies each conversion has real pixel data (a previous batch produced
# metadata-only stubs when run without full disk access).

set -euo pipefail

CAROUSEL_DIR="$(cd "$(dirname "$0")/../assets/img/about/carousel" && pwd)"

if ! command -v exiftool >/dev/null 2>&1; then
  echo "ERROR: exiftool is required to strip metadata. Install with: brew install exiftool" >&2
  exit 1
fi

is_valid_jpeg() {
  local file="$1"
  local info
  info="$(file -b "$file")"
  echo "$info" | grep -qE 'JPEG image data' || return 1
  if echo "$info" | grep -qE 'baseline|progressive'; then
    return 0
  fi
  local w h
  w="$(sips -g pixelWidth "$file" 2>/dev/null | awk '/pixelWidth/ {print $2}')"
  h="$(sips -g pixelHeight "$file" 2>/dev/null | awk '/pixelHeight/ {print $2}')"
  [[ -n "$w" && -n "$h" && "$w" -gt 0 && "$h" -gt 0 ]]
}

strip_image_metadata() {
  local src="$1"
  # Remove all tags; recreate essential color/orientation-safe decode tags only as needed.
  # -all= strips EXIF/IPTC/XMP/ICC where possible. -overwrite_original edits in place.
  exiftool -overwrite_original -all= "$src" >/dev/null 2>&1 || {
    echo "  WARN: could not strip metadata from $(basename "$src")" >&2
    return 0
  }
}

convert_one() {
  local src="$1"
  local base="${src%.*}"
  local dest="${base}.jpg"

  echo "Converting: $(basename "$src")"

  # Strip HEIC metadata before conversion
  strip_image_metadata "$src"

  if ! sips -s format jpeg -s formatOptions 90 -Z 1600 "$src" --out "$dest" >/dev/null; then
    echo "  ERROR: sips failed for $src" >&2
    return 1
  fi

  if ! is_valid_jpeg "$dest"; then
    echo "  ERROR: output has no image data: $dest" >&2
    rm -f "$dest"
    return 1
  fi

  local w h size
  w="$(sips -g pixelWidth "$dest" 2>/dev/null | awk '/pixelWidth/ {print $2}')"
  h="$(sips -g pixelHeight "$dest" 2>/dev/null | awk '/pixelHeight/ {print $2}')"
  size=$(wc -c < "$dest" | tr -d ' ')

  if [[ -z "$w" || -z "$h" || "$w" -lt 32 || "$h" -lt 32 ]]; then
    echo "  ERROR: output dimensions invalid (${w}x${h}): $dest" >&2
    rm -f "$dest"
    return 1
  fi

  strip_image_metadata "$dest"
  echo "  OK: $(basename "$dest") (${w}x${h}, ${size} bytes)"
}

shopt -s nullglob
cd "$CAROUSEL_DIR"

found=0
failed=0
for src in *.HEIC *.heic *.HEIF *.heif; do
  [ -f "$src" ] || continue
  found=$((found + 1))
  if convert_one "$src"; then
    rm -f "$src"
  else
    failed=$((failed + 1))
  fi
done

echo ""
echo "Stripping metadata from remaining carousel images..."
for img in *.{jpg,JPG,jpeg,JPEG,png,PNG}; do
  [ -f "$img" ] || continue
  strip_image_metadata "$img"
  echo "  stripped: $img"
done

if [ "$found" -eq 0 ]; then
  echo ""
  echo "No HEIC/HEIF files found to convert (metadata strip still applied)."
  exit 0
fi

echo ""
echo "Converted: $((found - failed))/$found"
[ "$failed" -eq 0 ] || exit 1
