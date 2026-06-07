import Link from "next/link";
import { highlights } from "./data/siteContent";
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
          <p className="eyebrow">Tailor-made Sri Lanka tours</p>
          <h1>Yes Lanka Travels</h1>
          <p className="hero-copy">
            Explore ancient kingdoms, misty tea country, wildlife parks and
            golden beaches with a local travel team that builds every trip
            around your pace.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" href="/booking">
              Start Planning
            </Link>
            <Link className="secondary-button" href="/packages">
              View Tours
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Trip planning quick facts">
          <div>
            <strong>4.9/5</strong>
            <span>Guest rating</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Fast itinerary</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Private tours</span>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-heading">
          <p className="eyebrow">Travel without the guesswork</p>
          <h2>Modern tour planning with local care</h2>
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
            <p className="eyebrow">Popular packages</p>
            <h2>Choose a route, then make it yours</h2>
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
          <p className="eyebrow">Destination design</p>
          <h2>From airport pickup to the last sunset</h2>
          <p>
            Build a complete Sri Lanka holiday with cultural sites, hill country
            rail journeys, national parks, beach time, local food stops and
            comfortable private transport.
          </p>
          <DestinationList />
          <Link className="text-link light-link" href="/destinations">
            Explore destinations
          </Link>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-heading">
          <p className="eyebrow">Guest stories</p>
          <h2>Trips that feel easy from start to finish</h2>
        </div>
        <Testimonials />
      </section>

      <SiteFooter />
    </main>
  );
}
