import Link from "next/link";
import { business, navItems } from "../data/siteContent";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Confiance Global home">
        <span className="brand-mark">CG</span>
        <span>
          <strong>{business.name}</strong>
          <small>Tours, vehicles, rooms</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/booking">
        Book Now
      </Link>
    </header>
  );
}
