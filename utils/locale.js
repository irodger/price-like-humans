function getLang() {
    let locale = 'en';
    
    if (typeof navigator !== 'undefined') { locale = navigator.locale }
    if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') { locale = env.LANG.split('_')[0] }
    if (typeof process.env !== 'undefined' && typeof process.env.LANG !== 'undefined') { locale = process.env.LANG.split('_')[0] }
    
    return locale;
}

const formatter = new Intl.NumberFormat(getLang());
const localDelimiterSeparator = (value) => {
  return formatter.format(value).replace(/\d/g, '').split('')[0];
}
  
const localSeparator = (value) => {
  return formatter.format(value).replace(/\d/g, '').split('')[0];
}

const locale = {
  lang: getLang(),
  separator: localSeparator(1000),
  delimiterSeparator: localDelimiterSeparator(1.1)
}

module.exports = locale;