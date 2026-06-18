import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confiance Global | Sri Lanka Tours, Transfers, Vehicles and Rooms",
  description:
    "Book Sri Lanka tour packages, airport pickup and drop, vehicle hire with driver, tourist rooms, and custom travel planning with Confiance Global."
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
