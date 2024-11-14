function main(array: string[]) {
  const new_array: string[] = [];

  for (let i = 0; i < array.length; i++) {
    let cur: string = array[i];

    if (new_array.includes(cur)) {
      continue;
    }

    new_array.push(cur);
  }

  return new_array;
}

const array: string[] = ["aaa", "aaa", "bbb", "ccc", "ddd", "ccc"];

const uniq = main(array);

console.log(uniq);
