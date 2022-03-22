import fs from "fs";
import { Command } from "commander";
import { findValueTermInComplexText } from "./services/findValueTermInComplextText";
import { arrayToCsv } from "./helpers/arrayToCsv";

const program = new Command();

try {
  program
    .command('find')
    .description('Find a term in a complex text')
    .argument('<path>', 'Path to the complex text')
    .option('--term <term>', 'term to find')
    .action((filePath, options) => {
      if (!options.term)
        return console.log('You need to insert a value into the --term flag');

      const text = fs.readFileSync(filePath, 'utf-8');
      const values = findValueTermInComplexText(options.term, text);

      const writeStream = fs.createWriteStream('temp/data.csv');

      writeStream.write(`${options.term} \n`);

      writeStream.write(arrayToCsv(values));
    });

  program.parse();
} catch (error) {
  throw error;
}
