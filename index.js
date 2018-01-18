const reverser = require('./utils/reverser');
const formattedPrice = require('./utils/formattedPrice');
const exponential2normal = require('./utils/exponential2normal');
const removeEndZeroes = require('./utils/removeEndZeroes');

const priceLikeHumans = {
  getPrice(value, separator) {
    return formattedPrice(value, separator)
  },
  exponentialFormatter(value) {
    return exponential2normal(value)
  },
  removeZero(value) {
    return removeEndZeroes(value)
  }
}

module.exports = priceLikeHumans;