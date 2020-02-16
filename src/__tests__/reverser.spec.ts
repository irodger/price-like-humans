import reverser from './../utils/reverser';

test('reverser return reversed value', () => {
  expect(reverser(1002)).toBe('2001');
  expect(reverser('apohz')).toBe('zhopa');
});
