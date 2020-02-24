import getLocale from './locale';

export default (value: number | string): string => {
  if (value < 1e-6) {
    const countAfterDot = Number(value.toString().split('-')) > 9 ? 9 : Number(value.toString().split('-')[1]);

    const localeFormatter = new Intl.NumberFormat(getLocale().lang, {
      style: 'decimal',
      minimumFractionDigits: countAfterDot,
      useGrouping: false,
    });

    return localeFormatter.format(Number(value.toString().replace(',', '.')));
  }

  return value.toString();
};
