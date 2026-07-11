# Adding Links

Every workflow in Magic Feed starts with getting a URL into the app. There are four ways to do it.

## Share from another app

Magic Feed registers as a system share target. In your browser (or any app with a share button), share the page and pick **Add to Magic Feed**. The app fetches the page's metadata and opens the share sheet with the results.

## From the clipboard

Copy a URL anywhere, then:

- Tap **Add → Share from clipboard** in the Feed tab, or
- Use the **Share from clipboard** app shortcut by long-pressing the Magic Feed icon on your launcher.

Magic Feed extracts the first URL it finds in the copied text. If there's no URL, it tells you so.

## Type or paste a URL

Tap **Add → Enter a URL** for a simple input page. Paste or type any web address and hit **Continue** — Magic Feed will fetch the title, description, and images.

## Scan a QR code

Tap **Add → Scan QR code**, or use the **Scan QR code** launcher shortcut. The scanner supports:

- **Live camera scanning** with a flash toggle for dark environments.
- **Decoding from an image** — pick any photo containing a QR code from your gallery.

## What happens next

Once a URL is captured, Magic Feed downloads the page and parses its **Open Graph tags and HTML metadata** to extract:

- the page **title**
- the page **description**
- the page's **images**, including the cover image

The result is saved to your feed and shown in a share sheet where you can immediately share the link, generate a poster, or browse the page's media.

::: tip Fetching blocked?
Some sites serve different content depending on the browser. If a page won't parse correctly, set a **custom User-Agent** in [Settings](./settings#webpage-fetching).
:::
