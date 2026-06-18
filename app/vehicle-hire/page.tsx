import Image from "next/image";
import Link from "next/link";
import { vehicles } from "../data/siteContent";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function VehicleHirePage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero vehicles-hero">
        <p className="eyebrow">Vehicle hire</p>
        <h1>Cars, vans and luxury vehicles with driver</h1>
        <p className="page-lead">
          Choose comfortable transport for airport transfers, family holidays,
          round tours, business travel and long-distance routes.
        </p>
      </section>
      <section className="section">
        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.title}>
              <Image src={vehicle.image} alt={vehicle.title} width={1200} height={900} />
              <div className="vehicle-card-body">
                <p className="tour-meta">{vehicle.category}</p>
                <h3>{vehicle.title}</h3>
                <dl className="spec-list">
                  <div>
                    <dt>Passenger capacity</dt>
                    <dd>{vehicle.passengers}</dd>
                  </div>
                  <div>
                    <dt>Luggage capacity</dt>
                    <dd>{vehicle.luggage}</dd>
                  </div>
                  <div>
                    <dt>Comfort</dt>
                    <dd>{vehicle.ac}</dd>
                  </div>
                  <div>
                    <dt>Availability</dt>
                    <dd>{vehicle.availability}</dd>
                  </div>
                  <div>
                    <dt>Rate</dt>
                    <dd>{vehicle.rate}</dd>
                  </div>
                  <div>
                    <dt>Best for</dt>
                    <dd>{vehicle.bestFor}</dd>
                  </div>
                </dl>
                <Link className="text-link" href="/booking">
                  Request quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
