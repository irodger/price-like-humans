const reverser = require('./reverser');
const locale = require('./locale');

function formattedPrice(value, delimiter, separator) {
  const valueSeparator = reverser(value).toString().replace(/\s|\d/g, '').length === 1 ? reverser(value).toString().replace(/\s|\d/g, '')[0] : delimiter || locale.delimiterSeparator;
  const stringDelimiterSeparator = delimiter || valueSeparator;
  const stringSeparator = separator || locale.separator;
  const numberArray = value.toString().split(typeof value === 'number' ? '.' : valueSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, stringSeparator);

  if (numberArray.length > 1) {
    const reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, stringSeparator);
    const numberAfterDot = reverser(reversedNumberAfterDot);

    return [numberBeforeDot, numberAfterDot].join(stringDelimiterSeparator);
  }
  
  return numberBeforeDot;
}

module.exports = formattedPrice;