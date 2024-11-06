// ЭТОТ КОД ТОЛЬКО НАЧАЛ ПИСАТЬ - это не нормальной код
console.log(1);
console.log(2);
console.log(3);
// это синхронный код строчка за строчкой и снизу и сверху

const wait = (ms, callback) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + ms) {
    // ничего не деалем
  }
  callback();
};

console.log(1);
wait(5000, () => console.log(2));
console.log(3);
// итак мы увидем что сразу выведится 1 через 5 секунд выведится 2 и сразу 3 ибо мы строчка за строчкой выполняем код(синхронная Функция)

const wait2 = (ms, callback) => {
  setTimeout(callback, ms);
};

console.log(1);
wait2(5000, () => console.log(2));
console.log(3);
// это Асснхронный код - все выполнаяется Независемо console.log(3) Независемо от выполнения wait2() то есть console.log(3) будет раньше чем console.log(2)
// а почему Ассинхронный код wait2 - потому что setTimeout - Ассинхронен

/* Promise - Надстройка для работы с Ассинхронном кодом - Ассинхронные функции возвращяют Promise
у Promise есть 3 состаяния
- pending - ожидание, исходное состаяние
- fullfilled - выполнено успешно, получен результат
- rejected - выполненно с ошибкой
*/
