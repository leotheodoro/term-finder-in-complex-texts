import fs from "fs";
import path from "path";
import { findValueTermInComplexText } from "./services/findValueTermInComplextText";

try {
  const text = fs.readFileSync(path.join(__dirname, 'mock', 'example.txt'), 'utf-8');
  const values = findValueTermInComplexText("TEMP(K)", text);
  console.log(values);
} catch (error) {
  console.log(error);
}
