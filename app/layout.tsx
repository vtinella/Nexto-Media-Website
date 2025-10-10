import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexto Media - Digital Marketing Agency",
  description: "A digital marketing agency positioned at the intersection of strategy, creativity, and video production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
