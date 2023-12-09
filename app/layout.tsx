import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import Image from 'next/image';

export const metadata: Metadata = {
  metadataBase: new URL('https://sujal.vercel.app'),
  title: {
    default: 'Sujal Shah',
    template: '%s | Sujal Shah',
  },
  description:
    'Crafting engaging digital experiences through meticulous software engineering. Sujal Shah blends creativity and technical expertise to build interactive, user-friendly web interfaces. Embark on a journey through his inventive portfolio of web development projects.',
  openGraph: {
    title: 'Sujal Shah',
    description:
      'Crafting engaging digital experiences through meticulous software engineering. Sujal Shah blends creativity and technical expertise to build interactive, user-friendly web interfaces. Embark on a journey through his inventive portfolio of web development projects.',
    url: 'https://sujal.vercel.app',
    siteName: 'Sujal Shah',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Sujal Shah',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-white bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <div className="noise" />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
