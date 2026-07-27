# Velvet Lounge

A fictional, multi-page hospitality website concept by Plex. It demonstrates brand-led art direction, event discovery, menu presentation, gallery interaction, and a reservation enquiry experience.

## Demo boundary

Velvet is not a live venue. Event programming is illustrative and evergreen. The reservation form validates entries in the browser but does not transmit or store personal data, and it says so explicitly after validation.

## Run locally

```bash
npm ci
npm run dev -- --port 3101
```

Open `http://127.0.0.1:3101`.

## Verify

```bash
npm run lint
npm run build
```

Important routes:

- `/`
- `/privacy`
- `/terms`

Before publishing, check the mobile navigation, reservation validation, gallery/modal keyboard behavior, legal links, metadata, and all “concept” labels.
