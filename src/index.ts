import fs from "fs";
import reader from "xlsx";
import { Command } from "commander";
import { findValueTermInComplexText } from "./services/findValueTermInComplextText";

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

      const worksheet = reader.utils.json_to_sheet(values);

      const workbook = reader.utils.book_new();
      workbook.Sheets[options.term] = worksheet;

      reader.writeFile(workbook, 'values.ods');

      console.log(values);
    });

  program.parse();
} catch (error) {
  console.log(error);
}
