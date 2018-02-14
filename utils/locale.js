function getLang() {
    let locale = 'en';

    if (typeof navigator !== 'undefined' && typeof navigator.locale !== 'undefined') { locale = navigator.locale }
    if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') { locale = env.LANG.split('_')[0] }
    if (typeof process.env !== 'undefined') {
      const lang = process.env.LANG || process.env.LC_CTYPE;

      locale = lang ? lang.split('_')[0] : locale;
    }

    return locale;
}

const formatter = new Intl.NumberFormat(getLang());
const getlocalDelimiter = (value) => {
  return formatter.format(value).replace(/\d/g, '').split('')[0];
}

const locale = {
  lang: getLang(),
  separator: getlocalDelimiter(1000),
  delimiter: getlocalDelimiter(1.1)
}

module.exports = locale;