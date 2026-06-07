import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Yes Lanka Travels home">
        <span className="brand-mark">YL</span>
        <span>
          <strong>Yes Lanka Travels</strong>
          <small>Sri Lanka private tours</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/packages">Packages</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/booking">Book</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="header-cta" href="/booking">
        Plan a Trip
      </Link>
    </header>
  );
}
