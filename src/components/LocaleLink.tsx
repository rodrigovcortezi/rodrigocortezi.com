import { Link, locales } from '@/i18n'
import { useLocale } from 'next-intl'

interface LocaleLinkProps {
  href: string
  locale: (typeof locales)[number]
  children: React.ReactNode
}

export const LocaleLink = ({ href, locale, children }: LocaleLinkProps) => {
  const currentLocale = useLocale()
  const isActive = locale === currentLocale

  return (
    <Link
      className={`no-underline ${isActive ? 'font-semibold' : ''}`}
      href={href}
      locale={locale}
    >
      {children}
    </Link>
  )
}
