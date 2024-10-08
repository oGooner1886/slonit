//! Задача 3.
// Написать функцию/метод, которая возвращает массив простых чисел
// в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
// Например, на вход переданы 2 числа: от 11 до 20  (диапазон считается
// включая граничные значения).
// На выходе программа должна выдать [11, 13 , 17, 19]

function primes(minN, maxN) {
  const primesNumber = [];
  for (let i = minN; i <= maxN; i++) {
    if (i > 1) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primesNumber.push(i);
      }
    }
  }
  console.log(primesNumber);

  return primesNumber;
}
primes(11, 20);
