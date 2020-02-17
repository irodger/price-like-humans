import reverser from './reverser';
import getLocale from './locale';
import { formattedPriceOptionsType } from "../types";

export default (value: string | number, options?: formattedPriceOptionsType): string | boolean => {
  if (isNaN(Number(value.toString().split('')[0]))) {
    return false;
  }

  if (typeof options?.delimiter !== 'undefined' && options?.delimiter === options?.separator) {
    console.error('The delimiter can`t be the same as the separator');
    return false;
  }

  let delimiter = options?.delimiter || getLocale(options?.lang).delimiter;
  let separator = options?.separator || getLocale(options?.lang).separator;

  if (delimiter === separator) {
    if (separator === '.') delimiter = ',';
    if (separator === '.') delimiter = ',';
    if (separator === ',' || separator === ' ') delimiter = '.';
  }

  const valueSeparator =
    reverser(value).replace(/\s|\d/g, '').length === 1 ? reverser(value).replace(/\s|\d/g, '')[0] : delimiter;
  const stringDelimiter = delimiter || valueSeparator;
  const numberArray = value.toString().split(typeof value === 'number' ? '.' : valueSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, separator);

  if (numberArray.length > 1) {
    const reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, separator);
    const numberAfterDot = reverser(reversedNumberAfterDot);

    return [numberBeforeDot, numberAfterDot].join(stringDelimiter);
  }

  return numberBeforeDot;
};
