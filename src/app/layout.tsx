import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodrigo Cortezi',
  description:
    'Olá! Eu sou Rodrigo Cortezi, engenheiro de software apaixonado por criar e inovar. Vamos nos conectar no LinkedIn ou GitHub!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`text-gray ${inter.className}`}>{children}</body>
    </html>
  )
}
