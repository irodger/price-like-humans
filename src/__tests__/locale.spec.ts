import getLocale from './../utils/locale';

const defaultLocaleObj = { delimiter: '.', lang: 'en', separator: ',' };

test('locale return locale obj', () => {
  // If false that means nodejs improved their lang pack, cuz the delimiter and the separator taken from default node lang (en)
  expect(getLocale().delimiter).toBe('.');
  expect(getLocale().separator).toBe(',');
});

test('getLocale return locale obj', () => {
  let undef = undefined;

  expect(getLocale()).toStrictEqual(defaultLocaleObj);
  expect(getLocale(undef)).toStrictEqual(defaultLocaleObj);
  expect(getLocale('en')).toStrictEqual(defaultLocaleObj);
  expect(getLocale('en').lang).toStrictEqual('en');
  expect(getLocale('en').delimiter).toStrictEqual('.');
  expect(getLocale('en').separator).toStrictEqual(',');
});
