import { locateIndexes } from "../helpers/locateIndexes";

const findValueTermInComplexText = (wordValue: string, text: string) => {
  const textTrimmed = text.replace(/\\s+/g, '');
  const values: string[] = [];

  const words = textTrimmed.split(' ');

  const indexes = locateIndexes(wordValue, words);

  indexes.map(index => {
    let value = "";
    let indexToSearch = 1;

    while (value == "" || value == "=") {
      value = words[index + indexToSearch];
      indexToSearch++;
    }

    values.push(value);
  });

  return values;
}

export { findValueTermInComplexText }