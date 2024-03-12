import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';
import { Outfit, PT_Serif } from 'next/font/google';
//@ts-ignore
import riveWASMResource from '@rive-app/canvas-lite/rive.wasm';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const ptserif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ptserif',
});

const outfit = Outfit({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Kyle Fraser Portfolio',
  description:
    'Portfolio site for Kyle Fraser. Maine web design, development, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ptserif.variable} ${outfit.variable}`}
      style={{ scrollbarGutter: 'stable' }}
    >
      <body className={'bg-white dark:bg-[#0f120b] overflow-x-hidden'}>
        <Script src={riveWASMResource} strategy="beforeInteractive" />
        <div id="root">
          <Providers>{children}</Providers>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
