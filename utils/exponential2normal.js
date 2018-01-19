const getLang = require('./getlang');

function exponential2normal(value) {
    if (value < 1e-6) {
      const countAfterDot = value.toString().split('-') > 9 ? 9 : value.toString().split('-')[1];
  
      const localeFormatter = new Intl.NumberFormat(getLang(), {
        style: 'decimal',
        minimumFractionDigits: countAfterDot,
        useGrouping: true,
      });

      return localeFormatter.format(value).replace(',', '.');
    }
  
    return value;
  }

  module.exports = exponential2normal;