import Image from "next/image";
import { galleryItems } from "../data/siteContent";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero gallery-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Vehicles, rooms and Sri Lanka travel moments</h1>
        <p className="page-lead">
          Replace these sample images with real photos of your vehicles, rooms,
          airport pickups, tour destinations and happy customers with permission.
        </p>
      </section>
      <section className="section">
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure className="gallery-item" key={item.title}>
              <Image src={item.image} alt={item.title} width={1200} height={900} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
