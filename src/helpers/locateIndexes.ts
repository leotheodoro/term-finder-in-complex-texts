export const locateIndexes = (substring: string, string: string[]) => {
  const indexes = [];
  let index = -1;

  while ((index = string.indexOf(substring, index + 1)) >= 0) {
    indexes.push(index);
  }

  return indexes;
}