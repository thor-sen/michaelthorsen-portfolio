import type { Metadata, Viewport } from "next";
import { EB_Garamond } from "next/font/google";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Michael Thorsen",
  description:
    "Personal portfolio of Michael Thorsen — GTM operator. I build revenue systems and the teams to run them.",
  openGraph: {
    title: "Michael Thorsen",
    description:
      "Personal portfolio of Michael Thorsen — GTM operator. I build revenue systems and the teams to run them.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#120c08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="font-sans antialiased">
        {children}
        <CursorSpotlight />
      </body>
    </html>
  );
}
