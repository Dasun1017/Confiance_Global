import { DestinationList } from "../ui/DestinationList";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function DestinationsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero destinations-hero">
        <p className="eyebrow">Destinations</p>
        <h1>Culture, tea country, wildlife and beaches</h1>
        <p className="page-lead">
          Mix the must-see icons with local stops, scenic roads and relaxed
          travel days across Sri Lanka.
        </p>
      </section>
      <section className="section destinations-section">
        <DestinationList detailed />
      </section>
      <SiteFooter />
    </main>
  );
}
