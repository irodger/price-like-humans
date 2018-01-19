const reverser = require('./reverser');
const getLang = require('./getlang');
const formatter = new Intl.NumberFormat(getLang());

const localDecimalSeparator = () => {
  return formatter.format(1.1).replace(/\d/g, '').split('')[0];
}

const localSeparator = () => {
  return formatter.format(1000).replace(/\d/g, '').split('')[0];
}

function formattedPrice(value, decimal, separator) {
  const stringDecimalSeparator = decimal || localDecimalSeparator();
  const stringSeparator = separator || localSeparator();
  const numberArray = value.toString().split(stringDecimalSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, stringSeparator);
  
  if (numberArray.length > 1) {
    const reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, stringSeparator);
    const numberAfterDot = reverser(reversedNumberAfterDot);
    
    return [numberBeforeDot, numberAfterDot].join(stringDecimalSeparator);
  }
  
  return numberBeforeDot;
}

module.exports = formattedPrice;