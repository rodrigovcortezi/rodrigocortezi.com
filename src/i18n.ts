import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'pt-BR'] as const
export const defaultLocale = 'pt-BR'
export const localePrefix = 'always'

export const { Link } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
})

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
