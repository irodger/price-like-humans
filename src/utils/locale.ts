import { getLocaleReturnInterface } from '../types';

const getLang = (): string => {
  let locale = 'en';

  if (typeof navigator !== 'undefined' && typeof navigator.language !== 'undefined') {
    locale = navigator.language;
  }

  if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
    const lang = process.env.LANG || process.env.LC_CTYPE;

    locale = lang || locale;
  }

  return locale.split(/[-_]/)[0];
};

export default (lang?: string): getLocaleReturnInterface => {
  const separatorExampleSource = 10000;
  const delimiterExampleSource = 1.1;
  const formatter = new Intl.NumberFormat(lang || getLang());

  const getLocalDelimiter = (value: number): string => {
    return formatter
      .format(value)
      .replace(/\d/g, '')
      .split('')[0];
  };

  return {
    lang: lang || getLang(),
    separator: getLocalDelimiter(separatorExampleSource),
    delimiter: getLocalDelimiter(delimiterExampleSource),
  };
};
