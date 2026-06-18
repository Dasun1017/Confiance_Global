import { business } from "../data/siteContent";

export function MapEmbed() {
  const query = process.env.NEXT_PUBLIC_GOOGLE_MAPS_QUERY || business.address;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const customEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL;
  const src =
    customEmbedUrl ||
    (apiKey
      ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
          query
        )}`
      : `https://maps.google.com/maps?q=${encodeURIComponent(
          query
        )}&output=embed`);

  return (
    <div className="map-card">
      <iframe
        title="Confiance Global location on Google Maps"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
