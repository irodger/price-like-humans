import _formattedPrice, { TformattedPrice } from './utils/formattedPrice';
import _exponentFormatter from './utils/exponentFormatter';

export default {
  formattedPrice(value: string | number | object): string | boolean {
    return _formattedPrice(<TformattedPrice>value);
  },
  exponentFormatter(value: number): string {
    return _exponentFormatter(value);
  }
};
