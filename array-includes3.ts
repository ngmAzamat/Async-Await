import * as fs from "fs/promises";

function main(array: string[]) {
  const new_array: string[] = [];

  for (const cur of array) {
    const exists = new_array.includes(cur);

    if (exists) {
      continue;
    }

    new_array.push(cur);
  }

  return new_array;
}

const data = await fs.readFile("text.txt", { encoding: "utf-8" });
const array = data.split("\n");

const uniq = main(array);
console.log(uniq);
