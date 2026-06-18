import { PackageGrid } from "../ui/PackageGrid";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function PackagesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero packages-hero">
        <p className="eyebrow">Tour packages</p>
        <h1>Sri Lanka tour packages with private transport</h1>
        <p className="page-lead">
          Choose a ready-made route, then adjust duration, pickup location,
          vehicle, rooms, activities and price around your group.
        </p>
      </section>
      <section className="section package-section">
        <PackageGrid showDetails />
      </section>
      <SiteFooter />
    </main>
  );
}
