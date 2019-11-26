'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function reverser(item) {
  if (typeof item === 'string') {
    return item.split('').reverse().join('');
  }

  if (typeof item === 'number') {
    return Number(item.toString().split('').reverse().join(''));
  }

  return null;
}

var getLang = function getLang() {
  var locale = 'en';

  if (typeof navigator !== 'undefined' && typeof navigator.locale !== 'undefined') {
    locale = navigator.locale;
  }

  if (typeof env !== 'undefined' && typeof env.LANG !== 'undefined') {
    locale = env.LANG.split('_')[0];
  }

  if (typeof process.env !== 'undefined') {
    var lang = process.env.LANG || process.env.LC_CTYPE;
    locale = lang ? lang.split('_')[0] : locale;
  }

  return locale;
};

var formatter = new Intl.NumberFormat(getLang());

var getLocalDelimiter = function getLocalDelimiter(value) {
  return formatter.format(value).replace(/\d/g, '').split('')[0];
};

var locale = {
  lang: getLang(),
  separator: getLocalDelimiter(1000),
  delimiter: getLocalDelimiter(1.1)
};

function formattedPrice(_ref) {
  var value = _ref.value,
      _ref$delimiter = _ref.delimiter,
      delimiter = _ref$delimiter === void 0 ? locale.delimiter : _ref$delimiter,
      _ref$separator = _ref.separator,
      separator = _ref$separator === void 0 ? locale.separator : _ref$separator;
  var args = arguments[0];

  if (typeof args['delimiter'] !== 'undefined' && typeof args['separator'] !== 'undefined' && delimiter === separator) {
    return false;
  } else {
    if (delimiter === separator) {
      if (typeof args['delimiter'] === 'undefined' && separator === '.') {
        delimiter = ',';
      }

      if (typeof args['delimiter'] === 'undefined' && separator === ',') {
        delimiter = '.';
      }

      if (typeof args['separator'] === 'undefined') {
        if (delimiter === ',' || delimiter === '.') {
          separator = '.';
        }

        if (delimiter === ' ') {
          return false;
        }
      }
    }
  }

  var myValue = _typeof(args) !== 'object' ? args : value;
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
    var countAfterDot = value.toString().split('-') > 9 ? 9 : value.toString().split('-')[1];
    var localeFormatter = new Intl.NumberFormat(locale.lang, {
      style: 'decimal',
      minimumFractionDigits: countAfterDot,
      useGrouping: false
    });
    return localeFormatter.format(value).replace(',', '.');
  }

  return value.toString();
}

function excessZeroes(value) {
  if (typeof value === 'number') {
    return parseFloat(value);
  }

  return parseFloat(parseFloat(value));
}

// const reverser = require('./utils/reverser');
var index = {
  formattedPrice: function formattedPrice$1(value, delimiter, separator) {
    return formattedPrice(value, delimiter, separator);
  },
  exponentFormatter: function exponentFormatter$1(value) {
    return exponentFormatter(value);
  },
  excessZeroes: function excessZeroes$1(value) {
    return excessZeroes(value);
  }
};

module.exports = index;
