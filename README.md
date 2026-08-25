
## Privacy

FlightDeck Pay has no account system, analytics, advertising, remote database, or data collection. Entries and settings are stored locally in the browser using `localStorage`.

Because the data is local, clearing Safari website data or deleting the site data can erase saved entries. Back up important records separately.



## Install on iPhone

1. Open the deployed site in Safari.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Make sure **Open as Web App** is enabled if iOS shows that option.
5. Tap **Add**.

FlightDeck Pay then launches from its own Home Screen icon and its core interface remains available offline after the first successful load.


## Data persistence

FlightDeck Pay stores app state locally in both IndexedDB and localStorage and writes again when the app is backgrounded. Data never leaves the device unless the user exports or shares it manually.
