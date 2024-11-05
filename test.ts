import * as fs from "fs";

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Ошибка чтения файла:", err);
    return;
  }
  console.log(data);
});
