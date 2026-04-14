import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { portfolio } from '@/lib/portfolio'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.siteUrl),
  title: `${portfolio.name} | ${portfolio.role}`,
  description: portfolio.summary,
  applicationName: `${portfolio.name} Resume`,
  authors: [{ name: portfolio.name, url: portfolio.githubUrl }],
  creator: portfolio.name,
  keywords: [
    '박세한',
    '백엔드 개발자',
    'Backend Developer',
    'Java',
    'Spring',
    '그룹웨어',
    '서비스 운영',
    '쿼리 튜닝',
    '리팩토링',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${portfolio.name} | ${portfolio.role}`,
    description: portfolio.summary,
    url: portfolio.siteUrl,
    siteName: `${portfolio.name} Resume`,
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: portfolio.defaultOgImage,
        alt: `${portfolio.name} 포트폴리오 대표 이미지`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.name} | ${portfolio.role}`,
    description: portfolio.summary,
    creator: '@jdhert',
    images: [portfolio.defaultOgImage],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
