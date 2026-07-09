# Hunter Protocol — standalone build

A single-page, offline-capable PWA (Progressive Web App). No app store,
no build tools, no Android SDK required.

## Fastest way to try it right now
Just open `index.html` in Chrome on your phone (transfer via email, USB,
Google Drive, WhatsApp — whatever's easiest). It works fully offline and
saves your progress on-device using localStorage.

Note: opened this way (as a local file) it runs in a normal browser tab —
no home-screen icon, no fullscreen "app" chrome. For that, see below.

## Getting a real installable app icon (recommended)
Android Chrome can only "install" a PWA (own icon, fullscreen, works
offline) when it's served over https — not from a local file. The easiest
free way to do that with no coding:

1. Create a free GitHub account if you don't have one (github.com).
2. Create a new repository, e.g. `hunter-protocol`.
3. Upload all 5 files/folders from this zip, keeping the folder structure:
   - index.html
   - manifest.json
   - service-worker.js
   - icons/icon-192.png
   - icons/icon-512.png
4. In the repo, go to Settings → Pages → set Source to "main" branch,
   root folder → Save.
5. GitHub gives you a URL like:
   `https://YOUR-USERNAME.github.io/hunter-protocol/`
6. Open that URL in Chrome on your Android phone.
7. Tap the ⋮ menu → "Install app" (or "Add to Home screen").
8. Done — you now have a Hunter Protocol icon on your home screen that
   opens fullscreen, works offline, and keeps your save data.

## Notes
- All progress is stored locally in the browser via localStorage. It is
  not synced anywhere — clearing browser data/cache will erase it.
- The daily reset happens at local midnight; keep the device's clock
  correct.
- To fully reset progress, use "RESET SAVE DATA" on the Log tab.
