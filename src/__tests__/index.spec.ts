import plh, { formattedPrice, exponentFormatter } from '../index';

test('formattedPrice return string value', () => {
  expect(formattedPrice(1000)).toBe('1,000');
  expect(plh.formattedPrice(1000)).toBe('1,000');
});

test('exponentFormatter return string value', () => {
  expect(exponentFormatter(1e-7)).toBe('0.0000001');
  expect(plh.exponentFormatter(1e-7)).toBe('0.0000001');
});
