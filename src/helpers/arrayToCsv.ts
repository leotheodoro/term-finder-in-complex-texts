export const arrayToCsv = (arr: string[], delimiter = ',') =>
  arr.map((v: any) => `"${v}"`).join(delimiter + `\n`);