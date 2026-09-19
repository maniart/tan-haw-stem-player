# tan-haw stem player

Web-based PWA one-shot sample launcher for live performance.

## Usage

Serve from any static host or locally:

```bash
npx serve .
```

Open `http://localhost:3000` in a browser. Landscape orientation only.

Tap a pad to trigger its sample. Orange top line = unplayed. Pulsing orange = playing. Dim = played. **Reset** clears all states.

Works offline after first load via service worker.

## Structure

```
index.html   — app
sw.js        — service worker (offline cache)
manifest.json
mp3/         — 00.mp3 … 08.mp3
```
