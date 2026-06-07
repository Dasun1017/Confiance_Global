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
              <Link className="text-link" href="/booking">
                Request this tour
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
