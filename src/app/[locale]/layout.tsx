import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'

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
    <html lang={locale}>
      <body className={`text-gray ${inter.className}`}>{children}</body>
    </html>
  )
}
