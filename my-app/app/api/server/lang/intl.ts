import { createIntl, createIntlCache } from '@formatjs/intl'
import { messages } from './messages'

const cache = createIntlCache()

export default (locale: string) => createIntl(
  {
    locale,
    messages: messages[locale],
  },
  cache,
)
