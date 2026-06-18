import Link from "next/link";
import { business, navItems } from "../data/siteContent";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <strong>{business.name}</strong>
        <span>{business.tagline}</span>
      </div>
      <div className="footer-links">
        {navItems.slice(1, 5).map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/contact">Contact / Book Now</Link>
    </footer>
  );
}
