'use client'
import { Link, locales } from '@/i18n'
import { useLocale } from 'next-intl'

interface LocaleLinkProps {
  href: string
  locale: (typeof locales)[number]
  className?: string
  children: React.ReactNode
}

export const LocaleLink = ({
  href,
  locale,
  className = '',
  children,
}: LocaleLinkProps) => {
  const currentLocale = useLocale()
  const isActive = locale === currentLocale

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isActive) {
      e.preventDefault()
    }
  }

  return (
    <Link
      className={`${className} no-underline ${isActive ? 'font-semibold' : ''}`}
      href={href}
      locale={locale}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
