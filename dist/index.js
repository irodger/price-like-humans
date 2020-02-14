'use strict';

var reverser = function (item) { return item.toString().split('').reverse().join(''); };

var getLang = function () {
    var locale = 'en';
    // @ts-ignore
    if (typeof navigator !== 'undefined' && typeof navigator.locale !== 'undefined') {
        locale = navigator.locale;
    }
    // @ts-ignore
    if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') {
        locale = env.LANG.split('_')[0];
    }
    if (typeof process.env !== 'undefined') {
        var lang = process.env.LANG || process.env.LC_CTYPE;
        locale = lang ? lang.split('_')[0] : locale;
    }
    return locale;
};
var getLocale = function (lang) {
    var separatorExampleSource = 10000;
    var delimiterExampleSource = 1.1;
    var formatter = new Intl.NumberFormat(lang || getLang());
    var getLocalDelimiter = function (value) {
        return formatter.format(value).replace(/\d/g, '').split('')[0];
    };
    return {
        lang: lang || getLang(),
        separator: getLocalDelimiter(separatorExampleSource),
        delimiter: getLocalDelimiter(delimiterExampleSource)
    };
};
var locale = getLocale();

function formattedPrice(_a) {
    var value = _a.value, delimiter = _a.delimiter, separator = _a.separator, lang = _a.lang;
    var args = arguments[0];
    if (delimiter === separator && typeof delimiter !== 'undefined') {
        console.error('The delimiter can`t be the same as the separator');
        return false;
    }
    var _b = lang ? getLocale(lang) : locale, userDel = _b.delimiter, userSep = _b.separator;
    delimiter = delimiter || userDel;
    separator = separator || userSep;
    if (delimiter === separator) {
        if (separator === '.') {
            delimiter = ',';
        }
        if (separator === ',') {
            delimiter = '.';
        }
        if (separator === ' ') {
            delimiter = '.';
        }
    }
    var myValue = typeof args !== 'object' ? args : value;
    var valueSeparator = reverser(myValue).toString().replace(/\s|\d/g, '').length === 1 ? reverser(myValue).toString().replace(/\s|\d/g, '')[0] : delimiter;
    var stringDelimiter = delimiter || valueSeparator;
    var numberArray = myValue.toString().split(typeof myValue === 'number' ? '.' : valueSeparator);
    var regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
    var numberBeforeDot = numberArray[0].replace(regexpWithSpace, separator);
    if (numberArray.length > 1) {
        var reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, separator);
        var numberAfterDot = reverser(reversedNumberAfterDot);
        return [numberBeforeDot, numberAfterDot].join(stringDelimiter);
    }
    return numberBeforeDot;
}

function exponentFormatter(value) {
    if (value < 1e-6) {
        var countAfterDot = Number(value.toString().split('-')) > 9 ? 9 : Number(value.toString().split('-')[1]);
        var localeFormatter = new Intl.NumberFormat(locale.lang, {
            style: 'decimal',
            minimumFractionDigits: countAfterDot,
            useGrouping: false,
        });
        return localeFormatter.format(Number(value)).replace(',', '.');
    }
    return value.toString();
}

var index = {
    formattedPrice: function (value, delimiter, separator) {
        // @ts-ignore
        return formattedPrice(value, delimiter, separator);
    },
    exponentFormatter: function (value) {
        return exponentFormatter(value);
    }
};

module.exports = index;
