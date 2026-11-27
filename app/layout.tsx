import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Events Booking & Restaurant Reservation",
  description: "App de reservas de eventos y restaurantes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mobile-container">{children}</div>
      </body>
    </html>
  );
}