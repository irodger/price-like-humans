function getHumansPrice(value, separator) {
  const stringSeparator = separator || '.';
  const numberArray = value.toString().split(stringSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, ' ');

  function reverseThis(item) {
    if (typeof item === 'string') {
      return item.split('').reverse().join('');
    }

    if (typeof item === 'number') {
      return Number(item.toString().split('').reverse().join(''));
    }

    return null;
  }
  
  if (numberArray.length > 1) {
      const reversedNumberAfterDot = reverseThis(numberArray[1]).replace(regexpWithSpace, ' ');
      const numberAfterDot = reverseThis(reversedNumberAfterDot);

      return [numberBeforeDot, numberAfterDot].join(stringSeparator);
  }

  return numberBeforeDot;
}

module.exports = getHumansPrice;
