import { travelInfo } from "../data/siteContent";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function TravelInfoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero travel-info-hero">
        <p className="eyebrow">Sri Lanka travel guide</p>
        <h1>Helpful tourist information before you arrive</h1>
        <p className="page-lead">
          Quick planning notes for places to visit, airport arrivals, local
          currency, SIM cards, safety and emergency contacts.
        </p>
      </section>
      <section className="section destinations-section">
        <div className="destination-grid">
          {travelInfo.map((item) => (
            <article className="destination-card" key={item.title}>
              <span>Travel info</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
