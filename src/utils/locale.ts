type getLocaleReturnType = {
  lang: string;
  separator: string;
  delimiter: string;
};

declare var process: {
  env: {
    LANG?: string;
    LC_CTYPE?: string;
  };
};

declare var env: {
  LANG?: string;
};

const getLang = (): string => {
  let locale = 'en';

  if (typeof navigator !== 'undefined' && typeof navigator.language !== 'undefined') {
    locale = navigator.language;
  }

  if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') {
    locale = env.LANG;
  }

  if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
    const lang = process.env.LANG || process.env.LC_CTYPE;

    locale = lang || locale;
  }

  return locale.split(/[-_]/)[0];
};

export const getLocale = (lang?: string): getLocaleReturnType => {
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

export default getLocale();
