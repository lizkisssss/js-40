// 1. Створити масив з трьох чисел. 
// Змінити значення другого елемента масиву на 10.

let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

// 2. Створити масив із трьох рядків. 
// Додати до масиву ще одну рядків.

let strings = ["number1", "number2", "number3"];
let newString = "number4";
let newStrings = [];

for(let i = 0; i < strings.length; i = i + 1) {
    newStrings[i] = strings[i];
}
newStrings[strings.length] = newString;
console.log(newStrings);

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
let numbersArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbersArray.length; i = i + 1) {
  sum = sum + numbersArray[i];
}
console.log(sum);

// 4. Створити масив з 5-ти чисел. 
// Вивести на екран всі елементи масиву за допомогою циклу for.
let numbersArray2 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbersArray2.length; i = i + 1) {
  console.log(numbersArray2[i]);
}

// 5. Створити масив із 5-ти рядків.
//  Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

let stringsArray = ["short", "long", "one", "very long", "very little"];
for (let i = 0; i < stringsArray.length; i = i + 1) {
  let stringLength = 0;
  let currentString = stringsArray[i];
  for(let j = 0; j < currentString.length; j = j + 1){
    stringLength = stringLength + 1;
  }
  if (stringLength > 5) {
    console.log(stringsArray[i]);
  }
}

// 6. Створити масив з 10-ти чисел. 
// Знайти та вивести на екран максимальне значення з масиву.

let numbersArray3 = [5, 12, 8, 25, 16, 30, 4, 21, 10, 18];
let max = numbersArray3[0];
for (let i = 1; i < numbersArray3.length; i = i + 1) {
  if (numbersArray3[i] > max) {
    max = numbersArray3[i];
  }
}
console.log("Максимальне значення:", max);

// 7. Створити масив з 10-ти чисел. 
// Знайти всі парні числа в масиві та вивести їх на екран.

let numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersArray4.length; i = i + 1) {
  if (numbersArray4[i] % 2 === 0) {
    console.log(numbersArray4[i]);
  }
}