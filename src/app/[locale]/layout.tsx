import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import QueryProvider from "./provider";
import { Alexandria } from "next/font/google";
import "../globals.scss";
import { LoadingProvider } from "@/context/LoadingContext";
import Preloader from "@/components/common/preloader";

const alexandria = Alexandria({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Arkantech - Innovative Software Solutions",
  description: "Arkantech provides cutting-edge software development, web solutions, and IT services to help businesses thrive in the digital era.",
  keywords: "software development, web development, IT solutions, Arkantech, digital transformation",
  openGraph: {
    title: "Arkantech - Innovative Software Solutions",
    description: "Empowering businesses with top-tier software development, web solutions, and IT services.",
    url: "https://www.arkantech.sa",
    siteName: "Arkantech",
    images: [
      {
        url: "https://www.arkantech.sa/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Arkantech - Innovative Software Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkantech - Innovative Software Solutions",
    description: "Empowering businesses with top-tier software development, web solutions, and IT services.",
    images: ["https://www.arkantech.sa/twitter-image.jpg"], // Replace with actual image
  },
};


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={alexandria.className}>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>

            <LoadingProvider>
              <Preloader />
              {children}
            </LoadingProvider>
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
