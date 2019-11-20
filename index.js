const reverser = require('./utils/reverser');
const formattedPrice = require('./utils/formattedPrice');
const exponentFormatter = require('./utils/exponentFormatter');
const excessZeroes = require('./utils/excessZeroes');

const priceLikeHumans = {
  formattedPrice(value, delimiter, separator) {
    return formattedPrice(value, delimiter, separator)
  },
  exponentFormatter(value) {
    return exponentFormatter(value)
  },
  excessZeroes(value) {
    return excessZeroes(value)
  }
};

module.exports = priceLikeHumans;
