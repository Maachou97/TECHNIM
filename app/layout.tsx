import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://technim-fibre.dear-crow-4333.chatgpt.site'),
  title: 'TECHNIM | Expert fibre optique en Île-de-France',
  description: 'Déploiement FTTH et FTTO, backbone, datacenter, mesures OTDR, maintenance et infrastructures télécoms en Île-de-France.',
  openGraph: {
    title: 'TECHNIM | Expertise fibre optique',
    description: 'Déploiement, mesure et maintenance des infrastructures fibre optique en Île-de-France.',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'TECHNIM — Expertise fibre optique' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TECHNIM | Expertise fibre optique',
    description: 'Déploiement, mesure et maintenance des infrastructures fibre optique en Île-de-France.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
