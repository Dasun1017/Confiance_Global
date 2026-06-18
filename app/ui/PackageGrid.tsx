import Image from "next/image";
import Link from "next/link";
import { tourPackages } from "../data/siteContent";

type PackageGridProps = {
  showDetails?: boolean;
};

export function PackageGrid({ showDetails = false }: PackageGridProps) {
  return (
    <div className="package-grid">
      {tourPackages.map((tour) => (
        <article className="tour-card" key={tour.title}>
          <Image
            src={tour.image}
            alt={`${tour.title} tour in Sri Lanka`}
            width={1200}
            height={900}
          />
          <div className="tour-card-body">
            <div>
              <p className="tour-meta">
                {tour.days} / {tour.price}
              </p>
              <h3>{tour.title}</h3>
            </div>
            <p>{showDetails ? tour.details : tour.tone}</p>
            <span>{tour.stops}</span>
            {showDetails ? (
              <>
                <dl className="spec-list">
                  <div>
                    <dt>Starting location</dt>
                    <dd>{tour.start}</dd>
                  </div>
                  <div>
                    <dt>Vehicle type</dt>
                    <dd>{tour.vehicle}</dd>
                  </div>
                  <div>
                    <dt>Included</dt>
                    <dd>{tour.includes}</dd>
                  </div>
                  <div>
                    <dt>Not included</dt>
                    <dd>{tour.excludes}</dd>
                  </div>
                </dl>
                <Link className="text-link" href="/booking">
                  Book via WhatsApp
                </Link>
              </>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
