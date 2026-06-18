import Link from "next/link";
import { Testimonials } from "../ui/Testimonials";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function ReviewsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero reviews-hero">
        <p className="eyebrow">Reviews</p>
        <h1>Tourist feedback and trust signals</h1>
        <p className="page-lead">
          Add real Google Reviews, Facebook reviews and WhatsApp screenshots
          with permission so new guests can book confidently.
        </p>
      </section>
      <section className="section testimonial-section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Customer stories</p>
            <h2>Clear service matters before and after arrival</h2>
          </div>
          <Link className="text-link" href="/booking">
            Book now
          </Link>
        </div>
        <Testimonials />
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Google Business Profile</p>
          <h2>Keep Search and Maps information fresh</h2>
          <p className="section-copy">
            Maintain photos, offers, posts, opening hours, phone number,
            website link and customer reviews so travelers can find Confiance
            Global on Google Search and Maps.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
