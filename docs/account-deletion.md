# Account Deletion

Magic Feed does not require an account. Signing in with Google is **optional** and exists for exactly one feature: backing up your feed to your own Google Drive.

## What the account consists of

If you sign in, two things exist:

1. **A Google sign-in record** — your Google account's ID, email address, display name, and avatar URL, held in the app's Firebase Authentication project. This is the only account data we hold.
2. **Your cloud backups** — stored in the private app data folder of **your own Google Drive**, not on our servers. (We don't have servers.)

Feeds, images, and settings on your device are **not** part of the account — they exist entirely locally, whether or not you ever sign in.

## Delete your account in the app

1. Open Magic Feed and go to the **Backups** tab → **Cloud (Google Drive)**.
2. Tap the **⋮ menu** next to *Sign out* and choose **Delete account**.
3. Confirm.

The app immediately:

- deletes **all cloud backups** from your Google Drive,
- revokes Magic Feed's access to your Google account, and
- deletes the **sign-in record** from Firebase Authentication.

The effect is immediate and permanent. Your local feeds and downloaded images stay on your device untouched — remove those separately with **Settings → Clear all feeds** or by uninstalling the app.

## If you've already uninstalled the app

You can complete the same deletion without reinstalling:

1. **Revoke the app's access**: go to [myaccount.google.com/connections](https://myaccount.google.com/connections), find *Magic Feed*, and remove its access. This also lets Google delete the app's backup data from your Drive.
2. **Request deletion of the sign-in record**: [open a GitHub issue](https://github.com/ShinChven/magic-feed-docs/issues) with the subject "Account deletion request". You don't need to post your email address publicly — just mention it's a deletion request and we'll arrange a private way to verify which account to remove.

Deletion requests are fulfilled within **30 days**.

## Summary of data and retention

| Data | Where it lives | Deleted by |
| --- | --- | --- |
| Google sign-in record (ID, email, name, avatar) | Firebase Authentication | In-app *Delete account*, or by request |
| Cloud backups | Your own Google Drive (private app folder) | In-app *Delete account*, or revoking access in your Google account |
| Feeds, images, settings | Your device only | *Clear all feeds*, deleting files, or uninstalling |

See the full [Privacy Policy](/privacy) for everything else.
