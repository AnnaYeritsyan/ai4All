import 'server-only'

import { cookies } from 'next/headers'
import createIntl from './intl'

const systemDefaultLocale = 'en' as AcceptLang
const defaultLocaleCookieKey = 'default_locale'
const accept: AcceptLang[] = ['en', 'hy']

export async function useIntl() {
  return createIntl(await getLocale())
}

export async function getLocale(): Promise<AcceptLang> {
  return (await cookies()).get(defaultLocaleCookieKey)?.value as AcceptLang ?? systemDefaultLocale
}

export async function setDefaultLocale(locale: AcceptLang) {
  if (accept.indexOf(locale) === -1) {
    throw new Error(`Locale ${locale} is not accepted.`)
  }
  (await cookies()).set(defaultLocaleCookieKey, locale)
}
