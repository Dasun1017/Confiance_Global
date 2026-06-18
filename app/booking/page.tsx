import { BookingForm } from "../ui/BookingForm";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function BookingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero booking-hero">
        <p className="eyebrow">Contact / Book now</p>
        <h1>Send your tour, transfer, vehicle or room request</h1>
        <p className="page-lead">
          Fill the quick form and it opens in WhatsApp with your details so we
          can reply with availability and a clear price.
        </p>
      </section>
      <section className="section booking-section">
        <BookingForm />
      </section>
      <SiteFooter />
    </main>
  );
}
