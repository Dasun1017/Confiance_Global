import Image from "next/image";
import Link from "next/link";
import { rooms } from "../data/siteContent";
import { MapEmbed } from "../ui/MapEmbed";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function RoomsStaysPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero rooms-hero">
        <p className="eyebrow">Rooms / stays</p>
        <h1>Clean tourist rooms with easy booking</h1>
        <p className="page-lead">
          Simple accommodation support for arrival nights, transit stays,
          families and tourists who want clear prices and quick WhatsApp help.
        </p>
      </section>
      <section className="section">
        <div className="room-grid">
          {rooms.map((room) => (
            <article className="vehicle-card" key={room.title}>
              <Image src={room.image} alt={room.title} width={1200} height={900} />
              <div className="vehicle-card-body">
                <h3>{room.title}</h3>
                <dl className="spec-list">
                  <div>
                    <dt>Guests</dt>
                    <dd>{room.guests}</dd>
                  </div>
                  <div>
                    <dt>Bed type</dt>
                    <dd>{room.bed}</dd>
                  </div>
                  <div>
                    <dt>Comfort</dt>
                    <dd>{room.comfort}</dd>
                  </div>
                  <div>
                    <dt>Wi-Fi</dt>
                    <dd>{room.wifi}</dd>
                  </div>
                  <div>
                    <dt>Bathroom</dt>
                    <dd>{room.bathroom}</dd>
                  </div>
                  <div>
                    <dt>Breakfast</dt>
                    <dd>{room.breakfast}</dd>
                  </div>
                  <div>
                    <dt>Nearby</dt>
                    <dd>{room.nearby}</dd>
                  </div>
                  <div>
                    <dt>Check-in / check-out</dt>
                    <dd>{room.check}</dd>
                  </div>
                  <div>
                    <dt>Price</dt>
                    <dd>{room.price}</dd>
                  </div>
                </dl>
                <Link className="text-link" href="/booking">
                  Reserve room
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-section room-map-section">
        <div className="contact-copy">
          <p className="eyebrow">Location</p>
          <h2>Google Map location</h2>
          <p>
            Add your exact Google Maps query or embed URL in environment
            variables when the final room location is confirmed.
          </p>
        </div>
        <MapEmbed />
      </section>
      <SiteFooter />
    </main>
  );
}
