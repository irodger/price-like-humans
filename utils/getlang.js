function getLang() {
    let locale = 'en';

    if (typeof navigator !== 'undefined') { locale = navigator.locale }
    if (typeof env !== 'undefined') { locale = env.LANG.split('_')[0] }
    if (typeof process.env !== 'undefined') { locale = process.env.LANG.split('_')[0] }

    return locale;
}

module.exports = getLang;