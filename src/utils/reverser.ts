export default (item: string | number): string =>
  item
    .toString()
    .split('')
    .reverse()
    .join('');
