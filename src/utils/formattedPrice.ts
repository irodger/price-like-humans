import reverser from './reverser';
import getLocale from './locale';
import exponentFormatter from './exponentFormatter';
import { formattedPriceOptionsType } from '../types';

export default (value: string | number, options?: formattedPriceOptionsType): string | boolean => {
  if (isNaN(Number(value))) {
    console.error('Value must be a number or a number inside the string');
    return false;
  }

  if (typeof options?.delimiter !== 'undefined' && options?.delimiter === options?.separator) {
    console.error('The delimiter can`t be the same as the separator');
    return false;
  }

  if (typeof options?.delimiter !== 'undefined' && options?.delimiter === '') {
    console.error('The delimiter can`t be empty. Remove this option to set default or set a value');
    return false;
  }

  let formattedValue = value < 1e-6 ? exponentFormatter(Number(value)) : value;
  let delimiter = options?.delimiter || getLocale(options?.lang).delimiter;
  let separator = options?.separator || getLocale(options?.lang).separator;

  if (delimiter === separator) {
    if (separator === '.') delimiter = ',';
    if (separator === '.') delimiter = ',';
    if (separator === ',' || separator === ' ') delimiter = '.';
  }

  const valueSeparator =
    typeof Number(formattedValue) === 'number' ? '.' : formattedValue.toString().replace(/\s|\d/g, '')[0];
  const numberArray = formattedValue.toString().split(valueSeparator);
  const regexpWithSpace = /\B(?=(\d{3})+(?!\d))/g;
  const numberBeforeDot = numberArray[0].replace(regexpWithSpace, separator);

  if (numberArray.length > 1) {
    const reversedNumberAfterDot = reverser(numberArray[1]).replace(regexpWithSpace, separator);
    const numberAfterDot = reverser(reversedNumberAfterDot);

    return [numberBeforeDot, numberAfterDot].join(delimiter);
  }

  return numberBeforeDot;
};
