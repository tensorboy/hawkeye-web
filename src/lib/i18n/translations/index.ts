import { zh, type Translations } from './zh'
import { en } from './en'
import { ja } from './ja'
import { ko } from './ko'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'
import type { Locale } from '../locales'

export const translations: Record<Locale, Translations> = {
  zh,
  en,
  ja,
  ko,
  es,
  fr,
  de,
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.zh
}

export type { Translations }
