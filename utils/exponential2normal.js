function exponential2normal(value) {
    if (value < 1e-6) {
      const countAfterDot = value.toString().split('-') > 9 ? 9 : value.toString().split('-')[1];
  
      return (value).toLocaleString('ru', {
        style: 'decimal',
        minimumFractionDigits: countAfterDot,
        useGrouping: true,
      }).replace(',', '.');
    }
  
    return value;
  }

  module.exports = exponential2normal;