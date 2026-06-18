import Link from "next/link";
import { highlights, trustItems } from "../data/siteContent";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function AboutUsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero about-hero">
        <p className="eyebrow">About us</p>
        <h1>Local Sri Lanka travel support from Confiance Global</h1>
        <p className="page-lead">
          We help tourists arrange private tours, airport transfers, vehicle
          hire and rooms with direct communication and flexible planning.
        </p>
      </section>
      <section className="section intro-section">
        <div className="section-heading">
          <p className="eyebrow">Our service style</p>
          <h2>Practical, friendly and clear before you arrive</h2>
        </div>
        <div className="intro-grid">
          {highlights.map((item) => (
            <div className="feature" key={item}>
              <span aria-hidden="true">+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section trust-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Trust & legal details</p>
            <h2>Details tourists look for before booking</h2>
          </div>
          <Link className="text-link" href="/contact">
            Ask a question
          </Link>
        </div>
        <div className="route-grid">
          {trustItems.map((item) => (
            <article className="simple-card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
