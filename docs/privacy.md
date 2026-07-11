# Privacy Policy

Magic Feed is built to keep your data on your device and under your control. This page explains what the app stores, what it accesses, and what leaves your phone.

## The short version

- Your feed is stored **locally on your device**. There is no Magic Feed server and no account to create.
- The app contains **no analytics, no ads, and no trackers**.
- The only data that leaves your device is what **you** send: pages you ask it to fetch, cards you share, and backups you upload to **your own Google Drive**.

## What Magic Feed stores

- **Saved links and their metadata** — the URL, title, description, and image references of pages you add. These live in a local database on your device.
- **Downloaded images** — saved to the folder you choose (by default your Pictures folder). They are ordinary files in your photo library, never locked inside the app.
- **Preferences** — your language, color mode, download and backup locations, poster style, and similar settings, stored locally.

## Network access

Magic Feed connects to the internet only to:

- **Fetch pages you add** — when you save a URL, the app downloads that page to extract its title, description, and images. The request goes directly from your device to that website; no intermediary sees it.
- **Load images** — cover images and page media are loaded from the sites that host them.
- **Google Drive backups** — only if you sign in and use cloud backup (see below).

## Google Sign-In and Drive backups

Cloud backup is **optional** and off until you sign in with Google.

- Backups are uploaded to your Google Drive's **private app data folder** (`appDataFolder`) using the narrow `drive.appdata` permission. Magic Feed **cannot see, read, or touch any of your other Drive files**.
- The backup contains your saved feed data — the same links and metadata stored on your device.
- The app keeps your **10 most recent backups** and deletes older ones.
- Signing out stops all cloud syncing. You can also remove the app's data from Drive at any time via your Google account's connected-apps settings.

Your Google credentials are handled by Google Sign-In; Magic Feed never sees your password.

## Device permissions

Magic Feed asks only for what its features need:

- **Camera** — solely for scanning QR codes. Nothing is recorded or uploaded.
- **Photos / media access** — to show your downloaded images in the Gallery and to decode QR codes from images you pick.
- **Internet** — for the network access described above.

Each permission is requested when the feature is first used, and the app works without any of them if you don't use those features.

## What Magic Feed never does

- No analytics or crash-reporting services.
- No advertising and no ad identifiers.
- No selling, sharing, or transmitting your data to third parties.
- No reading your clipboard in the background — clipboard access happens only when you tap *Share from clipboard*.

## Data deletion

Everything is yours to delete:

- Remove individual feeds, or use **Clear all feeds** in Settings.
- Delete local backup files from the Backups tab or your file manager.
- Delete cloud backups from the Backups tab, or revoke the app's Drive access from your Google account.
- Uninstalling the app removes its local database (downloaded images and backups in folders you chose remain, since they're your files).

## Questions

Magic Feed is open source — you can verify everything on this page by reading the code. For questions or concerns, please [open an issue on GitHub](https://github.com/ShinChven/magic-feed/issues).

*Last updated: July 11, 2026*
