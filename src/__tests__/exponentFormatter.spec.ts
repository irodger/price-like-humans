import exponentFormatter from '../utils/exponentFormatter';

test('exponentFormatter', () => {
  expect(exponentFormatter(1e-8)).toBe('0.00000001');
  expect(exponentFormatter(1e-20)).toBe('0.00000000000000000001');
  expect(exponentFormatter(1000)).toBe('1000');
});
