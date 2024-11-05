import * as fs from "fs";

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

fs.readFile("text.txt", "utf-8", (err, data) => {
  let array: string[] = [];
  if (err) {
    console.error("Ошибка чтения файла:", err);
    return;
  }
  // const array: string[] = data;
  array = data.split("\n");

  const uniq = main(array);
  console.log(uniq);
});
