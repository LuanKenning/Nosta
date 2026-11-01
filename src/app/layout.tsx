import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nosta.luankenning.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Project Nosta — The Backrooms in Real Life",
    template: "%s | Project Nosta",
  },
  description:
    "Luan Kenning is building the Backrooms in real life: the endless yellow rooms from the internet, as a physical space. Made in partnership with the Backrooms movie. Final look revealed on 10.10.2028 at 13:00.",
  keywords: [
    "Project Nosta",
    "Nosta",
    "Backrooms in real life",
    "The Backrooms",
    "Luan Kenning",
    "10.10.2028",
    "Backrooms movie",
    "Level 0",
    "Liminal space",
    "Yavqo",
    "Elaine Moreau",
    "Simon Webb",
    "Thomas Whitmore",
  ],
  authors: [{ name: "Luan Kenning", url: "https://luankenning.com" }],
  creator: "Luan Kenning",
  publisher: "Project Nosta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Project Nosta",
    title: "Project Nosta — The Backrooms in Real Life",
    description:
      "Luan Kenning is building the Backrooms in real life. Made in partnership with the Backrooms movie. Final look revealed 10.10.2028, 13:00.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Nosta — The Backrooms in Real Life",
    description:
      "The Backrooms built in real life by Luan Kenning. In partnership with the Backrooms movie. 10.10.2028, 13:00.",
    creator: "@luankenning",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Project Nosta",
      description: "Building the Backrooms in real life by Luan Kenning.",
      publisher: {
        "@type": "Person",
        name: "Luan Kenning",
        url: "https://luankenning.com",
        email: "contact@luankenning.com",
      },
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "Project Nosta: Backrooms Final Look Reveal",
      startDate: "2028-10-10T13:00:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      description:
        "The final look of the Backrooms built in real life by Luan Kenning will be revealed for the first time on 10.10.2028 at 13:00.",
      organizer: {
        "@type": "Person",
        name: "Luan Kenning",
        url: "https://luankenning.com",
      },
      sponsor: {
        "@type": "Organization",
        name: "Yavqo",
        url: "https://yavqo.com",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
