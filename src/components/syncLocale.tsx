'use client'

import { useEffect } from 'react'

const COOKIE_LOCALE_NAME = 'NEXT_LOCALE'
const COOKIE_MAX_AGE = 31536000
const COOKIE_SAME_SITE = 'lax'

interface SyncLocaleProps {
  locale: string
  path: string
}

export const SyncLocale = ({ locale, path }: SyncLocaleProps) => {
  useEffect(() => {
    document.cookie = `${COOKIE_LOCALE_NAME}=${locale}; path=${path}; max-age=${COOKIE_MAX_AGE}; sameSite=${COOKIE_SAME_SITE}`
  }, [locale, path])

  return null
}
