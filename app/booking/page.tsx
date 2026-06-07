import { BookingForm } from "../ui/BookingForm";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function BookingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero booking-hero">
        <p className="eyebrow">Quick booking request</p>
        <h1>Tell us your travel dates</h1>
        <p className="page-lead">
          Send your dates, group size and preferred tour style. Your message
          opens in WhatsApp so we can reply quickly with an itinerary.
        </p>
      </section>
      <section className="section booking-section">
        <BookingForm />
      </section>
      <SiteFooter />
    </main>
  );
}
