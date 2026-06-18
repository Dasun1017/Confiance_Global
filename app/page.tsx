import Link from "next/link";
import { highlights, homeServices } from "./data/siteContent";
import { DestinationList } from "./ui/DestinationList";
import { PackageGrid } from "./ui/PackageGrid";
import { SiteFooter } from "./ui/SiteFooter";
import { SiteHeader } from "./ui/SiteHeader";
import { Testimonials } from "./ui/Testimonials";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Sri Lanka travel services</p>
          <h1>Explore Sri Lanka with Confiance Global</h1>
          <p className="hero-copy">
            Tours, airport transfers, vehicle hire and tourist rooms arranged
            with friendly local support from arrival to checkout.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/booking">
              Book Now
            </Link>
            <Link
              className="secondary-button"
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Now
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Service quick facts">
          <div>
            <strong>24/7</strong>
            <span>Airport support</span>
          </div>
          <div>
            <strong>A/C</strong>
            <span>Vehicles</span>
          </div>
          <div>
            <strong>4-in-1</strong>
            <span>Tours, cars, rooms</span>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>Tours, vehicles, rooms and airport transfers in one place</h2>
        </div>
        <div className="service-grid">
          {homeServices.map((service) => (
            <Link className="service-card" href={service.href} key={service.title}>
              <span aria-hidden="true">+</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section why-section">
        <div className="section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>Simple planning with local care</h2>
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

      <section className="section package-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Tour packages</p>
            <h2>Ready-made Sri Lanka routes tourists can book fast</h2>
          </div>
          <Link className="text-link" href="/packages">
            All packages
          </Link>
        </div>
        <PackageGrid />
      </section>

      <section className="split-section">
        <div className="split-image" aria-label="Train through Sri Lanka tea country" />
        <div className="split-content">
          <p className="eyebrow">Custom travel planning</p>
          <h2>From airport name board to the last room night</h2>
          <p>
            Build a complete Sri Lanka holiday with private transport, airport
            pickup, tourist rooms, cultural sites, wildlife parks, beach time
            and hill country scenery.
          </p>
          <DestinationList />
          <Link className="text-link light-link" href="/travel-info">
            Sri Lanka travel guide
          </Link>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Guest reviews</p>
            <h2>Trust built through clear communication</h2>
          </div>
          <Link className="text-link" href="/reviews">
            Read reviews
          </Link>
        </div>
        <Testimonials />
      </section>

      <SiteFooter />
    </main>
  );
}
