#!/usr/bin/env node
/**
 * Regenerate the photos[] array in about.js from valid images in carousel/.
 * Skips corrupt/metadata-only JPEG stubs by requiring real pixel dimensions.
 * Preserves existing captions when filenames already appear in about.js.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const carouselDir = path.join(root, 'assets/img/about/carousel');
const aboutPath = path.join(root, 'assets/content/about.js');

const CAPTION_OVERRIDES = {
  '2022_1.jpg': 'Professional Headshot, 2022',
  '2025_1.png': 'My late childhood cats, Columbus, 2025',
};

function imageDimensions(filePath) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight ${JSON.stringify(filePath)}`, {
      encoding: 'utf8',
    });
    const width = Number((out.match(/pixelWidth:\s*(\d+)/) || [])[1]);
    const height = Number((out.match(/pixelHeight:\s*(\d+)/) || [])[1]);
    return { width, height };
  } catch {
    return { width: 0, height: 0 };
  }
}

function isValidImage(fileName) {
  if (fileName.startsWith('.')) return false;
  const filePath = path.join(carouselDir, fileName);
  const info = execSync(`file -b ${JSON.stringify(filePath)}`, { encoding: 'utf8' });
  const isImage =
    info.includes('JPEG image data') ||
    info.includes('PNG image') ||
    /\.(jpe?g|png)$/i.test(fileName);

  if (!isImage) return false;

  const { width, height } = imageDimensions(filePath);
  return width >= 32 && height >= 32;
}

function existingCaptions(aboutSource) {
  const captions = {};
  const entryRe = /\{\s*src:\s*'([^']+)',\s*caption:\s*'((?:\\'|[^'])*)',\s*\}/g;
  let m;
  while ((m = entryRe.exec(aboutSource))) {
    captions[path.basename(m[1])] = m[2].replace(/\\'/g, "'");
  }
  return captions;
}

function yearFromName(fileName) {
  const m = fileName.match(/^(20\d{2})_(\d+)/);
  if (!m) return null;
  return { year: Number(m[1]), order: Number(m[2]) };
}

let about = fs.readFileSync(aboutPath, 'utf8');
const captions = existingCaptions(about);

const files = fs.readdirSync(carouselDir).filter(isValidImage);
const valid = files.sort((a, b) => {
  // Professional headshot first when present
  if (a === '2022_1.jpg') return -1;
  if (b === '2022_1.jpg') return 1;

  const ay = yearFromName(a);
  const by = yearFromName(b);
  if (ay && by) {
    if (by.year !== ay.year) return by.year - ay.year;
    return ay.order - by.order;
  }
  if (ay) return -1;
  if (by) return 1;
  return a.localeCompare(b);
});

const photos = valid.map((file) => ({
  src: `about/carousel/${file}`,
  caption: captions[file] || CAPTION_OVERRIDES[file] || 'Megan Bailey',
}));

const photosBlock = `    photos: [\n${photos
  .map(
    (p) => `        {
            src: '${p.src}',
            caption: '${p.caption.replace(/'/g, "\\'")}',
        }`
  )
  .join(',\n')},\n    ],`;

about = about.replace(/    photos: \[[\s\S]*?    \],/, photosBlock);
fs.writeFileSync(aboutPath, about);

console.log(`Synced ${valid.length} carousel photo(s) in about.js`);
