function a1() {
  // представим fetch() то тогда на выполнение fetch будет время и a2() - раньше выполнится чем a1()
  // но можно const res = await fetch(); тогда из-за await a1() раньше выполнится чем a2()
  // но будет ошибка ибо выполнение await можно только в Ассинхронных функциях
  // a1();
  // a2();
  // a3(); - заменаем на
  // async functions go() { let a = a1(); }
  // и добавляем acynk к function a1()
  console.log("1");
}
function a2() {
  console.log("2");
}
function a3() {
  console.log("1");
}

a1();
a2();
a3();
