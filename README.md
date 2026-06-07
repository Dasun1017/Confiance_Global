# Yes Lanka Travels

Modern tourism website built with Next.js for Yes Lanka Travels.

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Google Maps setup

Copy `.env.example` to `.env.local` and update these values:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_embed_api_key
NEXT_PUBLIC_GOOGLE_MAPS_QUERY=Your business address, Sri Lanka
NEXT_PUBLIC_WHATSAPP_NUMBER=94771234567
NEXT_PUBLIC_CONTACT_EMAIL=hello@yeslankatravels.com
```

If you already have a full Google Maps embed URL, add:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?...
```
