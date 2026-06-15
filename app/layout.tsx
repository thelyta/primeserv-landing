import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Website Should Be Making You Money — Here's Why It Isn't",
  description:
    "Most business websites are digital dead weight. We build websites engineered to convert visitors into paying clients. See how it works.",
  keywords: [
    "website design",
    "conversion optimization",
    "sales landing page",
    "service business website",
    "lead generation",
  ],
  openGraph: {
    title: "Your Website Should Be Making You Money — Here's Why It Isn't",
    description:
      "Most business websites are digital dead weight. We build websites engineered to convert visitors into paying clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
