import reverser from './reverser';
import locale, { getLocale } from './locale';

type TformattedPrice = {
  [key: string]: number | string | undefined;
  delimiter?: string;
  separator?: string;
  lang?: string;
};

function formattedPrice({ value, delimiter, separator, lang}: TformattedPrice ): string | boolean {
  const args = arguments[0];

  if (delimiter === separator && typeof delimiter !== 'undefined') {
    console.error('The delimiter can`t be the same as the separator');
    return false;
  }

  const { delimiter: userDel, separator: userSep } = lang ? getLocale(lang) : locale;

  delimiter = delimiter || userDel;
  separator = separator || userSep;

  if (delimiter === separator) {
    if (separator === '.') {
      delimiter = ','
    }

    if (separator === ',') {
      delimiter = '.'
    }

    if (separator === ' ') {
      delimiter = '.'
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

export default formattedPrice;
