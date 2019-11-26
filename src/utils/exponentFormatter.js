import locale from './locale';

function exponentFormatter(value) {
    if (value < 1e-6) {
      const countAfterDot = value.toString().split('-') > 9 ? 9 : value.toString().split('-')[1];

      const localeFormatter = new Intl.NumberFormat(locale.lang, {
        style: 'decimal',
        minimumFractionDigits: countAfterDot,
        useGrouping: false,
      });

      return localeFormatter.format(value).replace(',', '.');
    }

    return value.toString();
  }

export default exponentFormatter;
