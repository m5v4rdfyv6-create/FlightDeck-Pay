# FlightDeck Pay — PWA

FlightDeck Pay is an installable web app for tracking flight/sim, ground, and miscellaneous paid hours.

## Privacy

FlightDeck Pay has no account system, analytics, advertising, remote database, or data collection. Entries and settings are stored locally in the browser using `localStorage`.

Because the data is local, clearing Safari website data or deleting the site data can erase saved entries. Back up important records separately.

## Deploy with GitHub Pages

1. Create a public GitHub repository (for example, `flightdeck-pay`).
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide an HTTPS site address for the app.

## Install on iPhone

1. Open the deployed site in Safari.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Make sure **Open as Web App** is enabled if iOS shows that option.
5. Tap **Add**.

FlightDeck Pay then launches from its own Home Screen icon and its core interface remains available offline after the first successful load.

## Files

- `index.html` — the complete app interface and logic
- `manifest.webmanifest` — install metadata
- `service-worker.js` — offline app-shell cache
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` — app icons

## Important

Do not add a user's exported/saved pay data to the repository. This public package contains no personal pay entries or personal default pay settings.


## Data persistence

FlightDeck Pay stores app state locally in both IndexedDB and localStorage and writes again when the app is backgrounded. Data never leaves the device unless the user exports or shares it manually.
