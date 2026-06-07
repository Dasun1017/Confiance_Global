import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yes Lanka Travels | Sri Lanka Tours and Travel Experiences",
  description:
    "Plan private Sri Lanka tours, beach escapes, wildlife safaris, cultural trips, airport transfers, and custom itineraries with Yes Lanka Travels."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
