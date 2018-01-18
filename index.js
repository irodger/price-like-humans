const reverser = require('./utils/reverser');

function priceLikeHuman(value, separator) {
  const stringSeparator = separator || '.';
  const numberArray = value.toString().split(stringSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, ' ');

  if (numberArray.length > 1) {
    const reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, ' ');
    const numberAfterDot = reverser(reversedNumberAfterDot);

    return [numberBeforeDot, numberAfterDot].join(stringSeparator);
  }

  return numberBeforeDot;
}

module.exports = priceLikeHuman;