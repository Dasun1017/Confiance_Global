import { destinations } from "../data/siteContent";

type DestinationListProps = {
  detailed?: boolean;
};

export function DestinationList({ detailed = false }: DestinationListProps) {
  if (!detailed) {
    return (
      <div className="destination-list">
        {destinations.map((destination) => (
          <span key={destination.name}>{destination.name}</span>
        ))}
      </div>
    );
  }

  return (
    <div className="destination-grid">
      {destinations.map((destination) => (
        <article className="destination-card" key={destination.name}>
          <span>{destination.region}</span>
          <h3>{destination.name}</h3>
          <p>{destination.summary}</p>
        </article>
      ))}
    </div>
  );
}
