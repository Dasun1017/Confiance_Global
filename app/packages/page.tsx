import { PackageGrid } from "../ui/PackageGrid";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function PackagesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero packages-hero">
        <p className="eyebrow">Tour packages</p>
        <h1>Private Sri Lanka routes for every travel style</h1>
        <p className="page-lead">
          Start from one of these routes, then adjust hotels, travel pace,
          activities and dates around your group.
        </p>
      </section>
      <section className="section package-section">
        <PackageGrid showDetails />
      </section>
      <SiteFooter />
    </main>
  );
}
