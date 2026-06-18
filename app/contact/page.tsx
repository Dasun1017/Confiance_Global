import { ContactForm } from "../ui/ContactForm";
import { MapEmbed } from "../ui/MapEmbed";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";
import { business } from "../data/siteContent";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact / book now</p>
        <h1>Message Confiance Global</h1>
        <p className="page-lead">
          Book an airport transfer, reserve a room, request a vehicle or ask for
          a Sri Lanka tour plan.
        </p>
      </section>
      <section className="contact-section contact-page-section">
        <div className="contact-copy">
          <p className="eyebrow">Find us</p>
          <h2>Fast help by WhatsApp, call or email</h2>
          <p>
            Best call-to-action: plan my trip, book airport transfer, reserve a
            room or request a tour package.
          </p>
          <div className="contact-details">
            <a href={`https://wa.me/${business.whatsappNumber}`}>WhatsApp Now</a>
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <span>{business.address}</span>
            <span>{business.hours}</span>
          </div>
        </div>
        <ContactForm />
        <MapEmbed />
      </section>
      <SiteFooter />
    </main>
  );
}
