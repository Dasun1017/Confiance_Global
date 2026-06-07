import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <strong>Yes Lanka Travels</strong>
      <span>Private tours, transfers and custom holidays in Sri Lanka.</span>
      <Link href="/">Back to home</Link>
    </footer>
  );
}
