import fs from "fs";
import path from "path";
import { locateIndexes } from "./helpers/locateIndexes";

const searchOcurrences = (wordValue: string, text: string) => {
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

try {
  const text = fs.readFileSync(path.join(__dirname, 'mock', 'example.txt'), 'utf-8');
  const values = searchOcurrences("TEMP(K)", text);
  console.log(values);
} catch (error) {
  console.log(error);
}
