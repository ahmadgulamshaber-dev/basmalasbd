import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Tajawal } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy 18th, Basmala ✨",
  description:
    "A cinematic journey through Basmala's 18th birthday — purple, roses, Egypt, and a fluffy little surprise.",
  openGraph: {
    title: "Happy 18th, Basmala ✨",
    description:
      "A cinematic birthday journey built with love for Basmala's 18th.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0820",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${tajawal.variable}`}
    >
      <body className="bg-deep-night text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
