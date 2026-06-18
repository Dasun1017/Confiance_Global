import Link from "next/link";
import { airportTransfers } from "../data/siteContent";
import { BookingForm } from "../ui/BookingForm";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function AirportPickupDropPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero airport-hero">
        <p className="eyebrow">Airport pickup & drop</p>
        <h1>Safe airport transfers across Sri Lanka</h1>
        <p className="page-lead">
          Our driver will wait at the arrival area with your name board and help
          you travel smoothly to your hotel, room or next destination.
        </p>
      </section>
      <section className="section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Popular routes</p>
            <h2>Book from Bandaranaike International Airport</h2>
          </div>
          <Link className="text-link" href="/vehicle-hire">
            Choose vehicle
          </Link>
        </div>
        <div className="route-grid">
          {airportTransfers.map((route) => (
            <article className="simple-card" key={route}>
              <h3>{route}</h3>
              <p>
                Share your flight number, arrival time, passengers and luggage
                count. We will recommend the right vehicle and quote.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section booking-section">
        <div className="section-heading">
          <p className="eyebrow">Transfer booking form</p>
          <h2>Send arrival details by WhatsApp</h2>
        </div>
        <BookingForm />
      </section>
      <SiteFooter />
    </main>
  );
}
