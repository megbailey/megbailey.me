# GVault

GVault is a Chrome extension I built so files can be encrypted on the device before they ever reach Google Drive. The ciphertext is stored as a `.gvault` file. Decryption happens locally too. The passphrase never leaves the browser, and there is no GVault server.

Google Drive already offers native client-side encryption, but only for Google Workspace, and only when an administrator turns it on. Personal Gmail accounts do not get that option, and Workspace is paid after a 14-day trial. GVault is for everyone else: personal Drive users, and Workspace users whose organization has not enabled CSE.

## What it does

- **Encrypt and Upload** from the popup: choose files or a folder, a Drive destination, and a passphrase. Nested folders are recreated on Drive.
- **Encrypt on Drive** with a header toggle. When it is on, File upload and drop are intercepted so the original bytes are never sent. GVault asks for a passphrase, encrypts locally, and uploads `.gvault` into the folder you are viewing.
- **Download and Decrypt** from the popup: pick a vault file or folder. Folder decrypt walks the tree and writes files under Downloads with the same relative paths.
- **Passphrase settings** for minimum length, special characters, default encrypted-folder name, and optional deletion of the Drive vault after decrypt.

The design goal is zero-knowledge: GVault never sees your passphrase or the unencrypted document. There is no backend that could store either one.

## How encryption works

Encryption uses [Argon2id](https://en.wikipedia.org/wiki/Argon2) to derive an AES-256-GCM key from the passphrase. Files are packed into 1 MiB chunks. Each chunk IV is a per-file random prefix plus the chunk index, and GCM additional authenticated data binds chunk index and count so reordered or duplicated chunks fail to decrypt.

A new random 16-byte salt is chosen for every vault file, so the same passphrase still produces a different encryption key. The salt and IV prefix are stored in the `.gvault` header. They are not secret; decrypt needs them to derive the same key and reconstruct each GCM invocation. Encrypting the same document again chooses a new salt and a new IV prefix, which avoids AES-GCM’s key-and-IV reuse pitfall.

The binary vault is streamed for both encrypt/upload and decrypt, so the full package is not held in memory.

For the byte-level layout, see the [vault file format](https://github.com/megbailey/gvault/blob/main/docs/GVAULT_FILE_FORMAT.md).

## Drive access

Drive access uses Google OAuth through `chrome.identity` with the `drive` scope. That token authorizes Drive API calls only. It is not the encryption key. GVault does not receive or store your Google password.

The Drive page uses two content scripts: a MAIN-world interceptor that cancels native file selection, and an isolated-world script that hosts the header toggle and passphrase overlay. Oversized intercepts are cancelled so nothing is uploaded unencrypted.

## Limits

- **5,119.922 GB per file.** Google Drive allows uploads up to 5 TiB. That cap applies to the `.gvault` package, so the largest original file that still fits is slightly smaller after header and GCM tag overhead.
- 10 files in a loose batch
- 50 files in a folder batch

## Stack

Manifest V3 · TypeScript · React · Webpack · `chrome.identity` · AES-256-GCM · Argon2id · Google Drive API · Vitest

The popup and Drive overlay also use [`@megbailey/ui`](https://www.npmjs.com/package/@megbailey/ui), the accessible React components I published from the megbailey-core monorepo.

## Links

- [GitHub repository](https://github.com/megbailey/gvault)
- [Security policy](/projects/gvault/security)
- [Terms of service](/projects/gvault/terms)
- [Privacy policy](/projects/gvault/privacy)
- [Vault file format](https://github.com/megbailey/gvault/blob/main/docs/GVAULT_FILE_FORMAT.md)
