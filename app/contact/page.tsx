import { ContactForm } from "../ui/ContactForm";
import { MapEmbed } from "../ui/MapEmbed";
import { SiteFooter } from "../ui/SiteFooter";
import { SiteHeader } from "../ui/SiteHeader";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Visit or message Yes Lanka Travels</h1>
        <p className="page-lead">
          Use the form, call us, or find our location on Google Maps. Update the
          real business location through your environment variables.
        </p>
      </section>
      <section className="contact-section contact-page-section">
        <div className="contact-copy">
          <p className="eyebrow">Find us</p>
          <h2>We are ready to plan your Sri Lanka trip</h2>
          <p>
            Add your real Google Maps API key and business address in
            environment variables. The map updates automatically from that
            location.
          </p>
          <div className="contact-details">
            <a href="tel:+94771234567">+94 77 123 4567</a>
            <a href="mailto:hello@yeslankatravels.com">
              hello@yeslankatravels.com
            </a>
            <span>Colombo, Sri Lanka</span>
          </div>
        </div>
        <ContactForm />
        <MapEmbed />
      </section>
      <SiteFooter />
    </main>
  );
}
