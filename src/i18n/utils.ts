import en from './en.json';
import es from './es.json';

export type Lang = 'en' | 'es';

const translations = { en, es } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return (result as string) ?? key;
  };
}

export function getOppositeLocale(lang: Lang): string {
  return lang === 'en' ? '/es' : '/';
}
