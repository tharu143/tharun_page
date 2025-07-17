import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tharun Kumar K - Flutter Developer | ERPNext Expert',
  description: 'Flutter Developer with 8+ months experience at Kyle Solution. Specialized in ERPNext API integrations, mobile-first design, and cross-platform development. Published 3 Android apps and 1 iOS app.',
  keywords: 'Flutter Developer, ERPNext, Mobile App Development, Android, iOS, MERN Stack, React, Node.js, API Integration, Tharun Kumar K',
  authors: [{ name: 'Tharun Kumar K' }],
  openGraph: {
    title: 'Tharun Kumar K - Flutter Developer | ERPNext Expert',
    description: 'Flutter Developer with 8+ months experience at Kyle Solution. Specialized in ERPNext API integrations, mobile-first design, and cross-platform development.',
    url: 'https://www.protfolio-tharun.com',
    siteName: 'Tharun Kumar K Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://drive.google.com/uc?export=view&id=1EoiQH8YCK05a4l1uof_4rEcRzs2Eb6om',
        width: 1200,
        height: 630,
        alt: 'Tharun Kumar K - Flutter Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tharun Kumar K - Flutter Developer | ERPNext Expert',
    description: 'Flutter Developer with 8+ months experience at Kyle Solution. Specialized in ERPNext API integrations, mobile-first design, and cross-platform development.',
    images: ['https://drive.google.com/uc?export=view&id=1EoiQH8YCK05a4l1uof_4rEcRzs2Eb6om'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}