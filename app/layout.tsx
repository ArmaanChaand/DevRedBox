import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { GAID, JSON_LD_ORGANIZATION, SITE_ORIGIN } from "@/lib/info";
import { GoogleAnalytics } from '@next/third-parties/google'
import { JsonLd } from "@/components/ui/json-ld";
import StudioHeader from "@/components/studio/studio-header";
import FooterStudio from "@/components/studio/studio-footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable"
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111"
};


export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  twitter: {
    creator: "@devredbox",
    site: "@devredbox"
  },
  // icons are added via file method.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd
          jsonString={JSON.stringify(JSON_LD_ORGANIZATION)}
        />
      </head>
      <body
        className={"" + " " + outfit.className} // Space at the end of string is required
      >
        <StudioHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterStudio />
      </body>
      <GoogleAnalytics gaId={GAID} />
    </html>
  );
}
