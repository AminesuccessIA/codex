import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { site } from '@/lib/site';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';
import { StructuredData } from '@/components/structured-data';
import { websiteStructuredData } from '@/lib/structured-data';
const sans = localFont({
  src: '../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2',
  variable: '--font-body',
  display: 'swap',
});
const display = localFont({
  src: '../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',
  variable: '--font-display',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'La Pépiite IT | ESN & intégrateur Microsoft',
    template: '%s | La Pépiite IT',
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    images: [
      {
        url: '/social-card.png',
        width: 1200,
        height: 630,
        alt: 'La Pépiite IT — Expertise Microsoft',
      },
    ],
  },
  robots: {
    index: !['preview', 'development'].includes(process.env.VERCEL_ENV || ''),
    follow: true,
  },
  twitter: { card: 'summary_large_image', images: ['/social-card.png'] },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable}`}>
      <body>
        <StructuredData data={websiteStructuredData()} />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
