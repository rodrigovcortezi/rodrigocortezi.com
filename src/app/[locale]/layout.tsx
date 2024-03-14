import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Footer } from '@/components/footer'
import { SyncLocale } from '@/components/syncLocale'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodrigo Cortezi',
  description:
    'Olá! Eu sou Rodrigo Cortezi, engenheiro de software apaixonado por criar e inovar. Vamos nos conectar no LinkedIn ou GitHub!',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} className="h-full">
      <SyncLocale locale={locale} path="/" />
      <body
        className={`text-gray ${inter.className} h-full selection:bg-white selection:text-black`}
      >
        <div className="px-[5vw] h-full">
          <div className="flex flex-col max-w-4xl mx-auto h-full">
            <div className="grow">{children}</div>
            <Footer />
            <SpeedInsights />
          </div>
        </div>
      </body>
      <Analytics />
    </html>
  )
}
