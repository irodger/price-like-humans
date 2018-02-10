function getLang() {
    let locale = 'en';
    
    if (typeof navigator !== 'undefined' && typeof navigator.locale !== 'undefined') { locale = navigator.locale }
    if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') { locale = env.LANG.split('_')[0] }
    if (typeof process.env !== 'undefined' && typeof process.env.LANG !== 'undefined') { locale = process.env.LANG.split('_')[0] }

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