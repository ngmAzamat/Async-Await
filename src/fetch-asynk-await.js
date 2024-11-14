fetch("https://api.github.com/users/ngmazamat")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// У fetch есле в dev tools залесть в Network - fetch/XHR есть status
// 200 - все прошло успешно
// 404 - не найдено

const result = fetch("https://api.github.com/users/ngmazamat");
console.log(result); // выводим и получаем - promise:fulfilled - иными словами fetch() - ассинхронен

console.log(1);
console.log(2);
console.log(3);
console.log(4); // это можеть раньше выполнится чем fetch() - ибо fetch() ассинхронен и console.log() не ждет выполнения fetch()
// в отличии от .then он жедт fetch()
