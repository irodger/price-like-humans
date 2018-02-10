const reverser = require('./reverser');
const locale = require('./locale');

function formattedPrice({ value, delimiter = locale.delimiter, separator = locale.separator }) {
  const args = arguments[0];

  if (typeof args['delimiter'] !== 'undefined' && typeof args['separator'] !== 'undefined') {
    if (delimiter === separator) {
      return false;
    }
  } else {
    if (delimiter === separator) {
      if (typeof args['delimiter'] === 'undefined' && separator === '.') {
        delimiter = ','
      }

      if (typeof args['delimiter'] === 'undefined' && separator === ',') {
        delimiter = '.'
      }

      if (typeof args['separator'] === 'undefined') {
        if (delimiter === ',' || delimiter === '.') {
          separator = '.'
        }

        if (delimiter === ' ') {
          return false;
        }
      }
    }
  }

  const myValue = typeof args !== 'object' ? args : value;
  const valueSeparator = reverser(myValue).toString().replace(/\s|\d/g, '').length === 1 ? reverser(myValue).toString().replace(/\s|\d/g, '')[0] : delimiter;
  const stringDelimiter = delimiter || valueSeparator;
  const numberArray = myValue.toString().split(typeof myValue === 'number' ? '.' : valueSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, separator);

  if (numberArray.length > 1) {
      const reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, separator);
      const numberAfterDot = reverser(reversedNumberAfterDot);

      return [numberBeforeDot, numberAfterDot].join(stringDelimiter);
  }

  return numberBeforeDot;
}

module.exports = formattedPrice;