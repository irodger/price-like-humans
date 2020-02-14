import _formattedPrice from './utils/formattedPrice';
import _exponentFormatter from './utils/exponentFormatter';

export default {
  formattedPrice(value: any, delimiter: string, separator: string): number | string {
    // @ts-ignore
    return _formattedPrice(value, delimiter, separator)
  },
  exponentFormatter(value: number | string) {
    return _exponentFormatter(value)
  }
};
