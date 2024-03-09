import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'
// import { Footer } from '@/components/Footer'

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
      <body className={`text-gray ${inter.className} h-full`}>
        <div className="px-[5vw] h-full">
          <div className="flex flex-col max-w-4xl mx-auto h-full">
            <div className="grow">{children}</div>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
