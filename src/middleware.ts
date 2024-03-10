import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, localePrefix } from './i18n'

const COOKIE_LOCALE_NAME = 'NEXT_LOCALE'

const customLocaleDetection = (request: NextRequest) => {
  // use geolocation if available
  const country = request.headers.get('X-Vercel-IP-Country')
  const [, localePrefix, ...segments] = request.nextUrl.pathname.split('/')
  const locale = locales.includes(localePrefix as any)
    ? localePrefix
    : country === 'BR'
      ? 'pt-BR'
      : country
        ? 'en'
        : ''

  // rewrite request pathname with resolved location
  request.nextUrl.pathname = [locale, ...segments].join('/')
}

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix,
  })

  const isLocaleCookieSet = Boolean(request.cookies.get(COOKIE_LOCALE_NAME))
  if (!isLocaleCookieSet) {
    customLocaleDetection(request)
  }

  const response = handleI18nRouting(request)
  response.cookies.set('cookieName', 'cookieValue', {
    path: '/',
    maxAge: 3600,
    sameSite: 'lax',
    secure: true,
  })
  // response.headers.append(
  //   'Set-Cookie',
  //   'cookieName=cookieValue; Path=/; Max-Age=3600; SameSite=Lax; Secure',
  // )

  return response
}

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*'],
}
