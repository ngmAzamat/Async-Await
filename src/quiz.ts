import * as fs from "fs/promises";
const red = Bun.color("red", "ansi");
const green = Bun.color("green", "ansi");
const white = Bun.color("white", "ansi");
let counter = 0; // Инициализация счетчика правильных ответов

function askQuestion(quest: string, answers: string[], answer: number) {
  console.log("\n=============================\n");
  console.log(quest);

  for (let i = 0; i < answers.length; i++) {
    console.log(i + 1, answers[i]); // тут можно пробел не писать ибо console.log() - после каждого параметр,(делает пробел) параметр
  }

  const HumanAnswer: number = parseInt(prompt("Ваш ответ:") || "0"); // parseInt() - делает number

  if (HumanAnswer == answer) {
    console.log(green, "вы правы", white);
    return true;
  } else {
    console.log(red, "вы не правы", white);
    return false;
  }
}

function makeUniq(array: string[] = []): string[] {
  let new_array: string[] = [];
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
const questionList = makeUniq(array);

for (let i = 0; i < questionList.length; i++) {
  const questionParsed: string[] = questionList[i].split("\n");
  const question = questionParsed.shift() || "";
  const answer = parseInt(questionParsed.pop() || "0");

  const res = askQuestion(question, questionParsed, answer);

  if (res) {
    counter++;
  }
}

console.log("ваш итоговый счет: ", counter);
