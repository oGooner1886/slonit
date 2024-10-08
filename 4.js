//! Задача 4.
// Написать метод, который в консоль выводит таблицу умножения.
// На вход метод получает число, до которого выводит таблицу умножения.
// В консоли должна появиться таблица. Например, если на вход пришло число 5,
// то получим:


// function miltiTable(number){
//   for(let i = 1; i < 11; i++){
//     console.log(`${number} * ${i} = ${number*i}`);
    
//   }
// }
// miltiTable(9)

function multiTable(value) {
  let table = '';

  for (let i = 1; i <= value; i++) {
    let tableString = '';

    for (let j = 1; j <= value; j++) {
      tableString += ' ' + (i * j) + ' ';
    }

    tableString += '\n';
    table += tableString;

  } 

  return table;
}

console.log(multiTable(9));