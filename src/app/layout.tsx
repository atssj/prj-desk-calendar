import '../styles/globals.css';

import { JSX } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calendar Designer | Create Custom Desk Calendars',
  description: 'Design and customize your perfect desk calendar. Choose layouts, add personal events, and create a calendar that fits your style and needs.',
  keywords: 'desk calendar, calendar designer, custom calendar, personalized calendar, calendar maker',
  openGraph: {
    title: 'Calendar Designer | Create Custom Desk Calendars',
    description: 'Design and customize your perfect desk calendar',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-hidden`}>
        <Header />
        <main className="relative flex h-[calc(100vh-64px)] bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  )
}