import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

const COOKIE_LOCALE_NAME = 'NEXT_LOCALE'

const customLocaleDetection = (request: NextRequest) => {
  // use geolocation if available
  const country = request.headers.get('X-Vercel-IP-Country')
  const [, localePrefix, ...segments] = request.nextUrl.pathname.split('/')
  const locale =
    localePrefix === 'pt-BR' || localePrefix === 'en'
      ? localePrefix
      : country === 'BR'
        ? 'pt-BR'
        : ''

  // rewrite request pathname with resolved location
  request.nextUrl.pathname = [locale, segments].join('/')
}

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
    localePrefix: 'as-needed',
  })

  const isLocaleCookieSet = Boolean(request.cookies.get(COOKIE_LOCALE_NAME))
  if (!isLocaleCookieSet) {
    customLocaleDetection(request)
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*'],
}
