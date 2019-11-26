// const reverser = require('./utils/reverser');
import _formattedPrice from './utils/formattedPrice';
import _exponentFormatter from './utils/exponentFormatter';
import _excessZeroes from './utils/excessZeroes';

export default {
  formattedPrice(value, delimiter, separator) {
    return _formattedPrice(value, delimiter, separator)
  },
  exponentFormatter(value) {
    return _exponentFormatter(value)
  },
  excessZeroes(value) {
    return _excessZeroes(value)
  }
};
