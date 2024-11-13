import * as fs from "fs/promises";

let counter = 0; // Инициализация счетчика правильных ответов

function questions(
  quest: string,
  option1: string,
  option2: string,
  option3: string,
  option4: string,
  answer: number
) {
  let HumanAnswer: number;
  console.log(quest);
  console.log("1. ", option1);
  console.log("2. ", option2);
  console.log("3. ", option3);
  console.log("4. ", option4);
  HumanAnswer = prompt("Ваш ответ:");
  if (HumanAnswer == answer) {
    console.log("вы правы");
    counter = counter + 1;
  } else {
    console.log("вы не правы");
  }
}

function main(array = []) {
  let new_array = [];
  for (const cur of array) {
    const exists = new_array.includes(cur);
    if (exists) {
      continue;
    }
    new_array.push(cur);
  }
  return new_array;
}

const data = await fs.readFile("Westeros.txt", { encoding: "utf-8" });
const array = data.split("\n\n");
const uniq = main(array);

for (let i = 0; i <= 4; i++) {
  let uniq1: string = uniq[i];
  let array1: any = uniq1.split("\n");
  let res1 = main(array1);
  questions(res1[0], res1[1], res1[2], res1[3], res1[4], res1[5]);
}

console.log("ваш итоговый счет: ", counter);
