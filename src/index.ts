import _formattedPrice from './utils/formattedPrice';
import _exponentFormatter from './utils/exponentFormatter';
import { formattedPriceOptionsType } from './types';

export function formattedPrice(value: string | number, options?: formattedPriceOptionsType): string | boolean {
  return _formattedPrice(value, options);
}

export function exponentFormatter(value: number): string {
  return _exponentFormatter(value);
}

export default {
  formattedPrice(value: string | number, options?: formattedPriceOptionsType): string | boolean {
    return _formattedPrice(value, options);
  },
  exponentFormatter(value: number): string {
    return _exponentFormatter(value);
  },
};
