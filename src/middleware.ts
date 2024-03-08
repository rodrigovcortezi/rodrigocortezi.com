import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  const country = request.headers.get('X-Vercel-IP-Country')
  const [, localePrefix, ...segments] = request.nextUrl.pathname.split('/')
  const locale =
    localePrefix === 'pt-BR' || localePrefix === 'en'
      ? localePrefix
      : country === 'BR'
        ? 'pt-BR'
        : ''
  request.nextUrl.pathname = [locale, segments].join('/')

  const handleI18nRouting = createMiddleware({
    locales: ['en', 'pt-BR'],
    defaultLocale: 'pt-BR',
  })

  return handleI18nRouting(request)
}

export const config = {
  matcher: ['/', '/(pt-BR|en)/:path*'],
}
