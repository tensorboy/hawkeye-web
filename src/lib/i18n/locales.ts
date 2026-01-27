export const locales = ['zh', 'en', 'ja', 'ko', 'es', 'fr', 'de'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
}

export const localeFlags: Record<Locale, string> = {
  zh: '🇨🇳',
  en: '🇺🇸',
  ja: '🇯🇵',
  ko: '🇰🇷',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
}

export const defaultLocale: Locale = 'en'

export function getLocalePath(locale: Locale): string {
  return locale === 'en' ? '/' : `/${locale}`
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
