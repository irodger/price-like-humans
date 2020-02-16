import locale, { getLocale } from './../utils/locale';

const defaultLocaleObj = { delimiter: '.', lang: 'en', separator: ',' };

test('locale return locale obj', () => {
  // delimiter and separator taken from default node lang (en)
  expect(locale.lang).toBe(locale.lang);
  expect(locale.delimiter).toBe('.');
  expect(locale.separator).toBe(',');
});

test('getLocale return locale obj', () => {
  expect(getLocale().lang).toStrictEqual(locale.lang);
  expect(getLocale('en')).toStrictEqual(defaultLocaleObj);
  expect(getLocale('en').lang).toStrictEqual('en');
  expect(getLocale('en').delimiter).toStrictEqual('.');
  expect(getLocale('en').separator).toStrictEqual(',');
});
