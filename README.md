# Pujjaneya Angrezi

Hindi speakers who already know words and short sentences, but freeze in conversation.

The site is a single static app: ten spoken-paragraph lessons, Hindi support lines, XP, a streak, and a garden picture that unlocks with each completed lesson. Built for Safari on iPhone.

## Local

Open `index.html` in a browser, or:

```
npx wrangler dev
```

## Cloudflare Worker / Pages

Recommended: **Cloudflare Pages** pointed at this GitHub repo (root, no build command). You get `*.pages.dev` and can attach a Worker later.

Workers + Assets:

```
npx wrangler deploy
```

That uses `wrangler.toml` (`assets.directory = "."`) so `worker.js` serves the static files on `*.workers.dev`.

## iPhone

Safari → Share → Add to Home Screen.

Speech playback uses the Web Speech API after a tap (required on iOS).

Progress is stored in `localStorage` on the device.
