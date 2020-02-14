type TgetLocaleReturn = {
    lang: string;
    separator: string;
    delimiter: string;
};

const getLang = (): string => {
    let locale = 'en';

    // @ts-ignore
    if (typeof navigator !== 'undefined' && typeof navigator.locale !== 'undefined') { locale = navigator.locale; }
    // @ts-ignore
    if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') { locale = env.LANG.split('_')[0]; }
    if (typeof process.env !== 'undefined') {
      const lang = process.env.LANG || process.env.LC_CTYPE;

      locale = lang ? lang.split('_')[0] : locale;
    }

    return locale;
};

export const getLocale = (lang?: string): TgetLocaleReturn => {
    const separatorExampleSource = 10000;
    const delimiterExampleSource = 1.1;
    const formatter = new Intl.NumberFormat(lang || getLang());

    const getLocalDelimiter = (value: number): string => {
        return formatter.format(value).replace(/\d/g, '').split('')[0];
    };

    return {
        lang: lang || getLang(),
        separator: getLocalDelimiter(separatorExampleSource),
        delimiter: getLocalDelimiter(delimiterExampleSource)
    };
};

const locale = getLocale();

export default locale;
