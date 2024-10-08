//! Задача 1.
// Разработайте функцию, которая принимает целое число
// в качестве аргумента и возвращает строку, содержащую это число и
// слово "компьютер" в нужном склонении по падежам в зависимости от числа.
// Например, при вводе числа 25 функция должна возвращать "25 компьютеров",
// для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });

// rl.on("line", function comp(n) {
//   let ost = Math.round(n % 10);

//   if ((ost >= 10 && ost < 20) || ost > 4 || ost === 0) {
//     console.log(`${n} компьютеров`);
//     return `${n} компьютеров`;
//   } else if (ost === 1) {
//     console.log(`${n} компьютер`);
//     return `${n} компьютер`;
//   } else {
//     console.log(`${n} компьютера`);
//     return `${n} компьютера`;
//   }
// });

function comp(n) {
  let ost = Math.round(n % 10);

  if ((ost >= 10 && ost < 20) || ost > 4 || ost === 0) {
    console.log(`${n} компьютеров`);
    return `${n} компьютеров`;
  } else if (ost === 1) {
    console.log(`${n} компьютер`);
    return `${n} компьютер`;
  } else {
    console.log(`${n} компьютера`);
    return `${n} компьютера`;
  }
}
