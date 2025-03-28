// Напиши функцію logItems(array), 
// яка отримує масив і використовує цикл for,
//  який для кожного елемента масиву буде виводити в консоль 
// повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] 
// з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

const myArray = ['Mango', 'Poly', 'Ajax'];
logItems(myArray); 

// Напиши скрипт підрахунку вартості гравіювання прикрас.
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок (в рядку будуть тільки слова і прогалини)
//  і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  const wordCount = words.length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
};

const price1 = calculateEngravingPrice('JavaScript is in my blood', 10);
console.log(price1); 

console.log(calculateEngravingPrice('Internet its so good for us', 20)); 


// Напиши функцію findLongestWord(string), 
// яка приймає параметром довільний рядок
//  (в рядку будуть тільки слова і прогалини) 
// і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

const longest1 = findLongestWord('Javascript its so easy programming language');
console.log(longest1); 

console.log(findLongestWord('I like C++ and JavaScript')); 


// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає
//  в кінець рядка три крапки '...', 
// після чого повертає укорочену версію.

const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + '...';
  }
};

console.log(formatString('Це короткий рядок')); 
console.log(formatString('Це дуже довгий рядок, який потрібно обрізати, щоб він не перевищував 40 символів')); 


//   Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
//  Функція перевіряє її на вміст слів spam і sale. 
// Якщо знайшли заборонене слово, то функція повертає true,
//  якщо заборонених слів немає функція повертає false.
//  Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();
  const spamWords = ['spam', 'sale'];
  for (const word of spamWords) {
    if (normalizedMessage.includes(word)) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam('Latest technology news sale')); 
console.log(checkForSpam('JavaScript weekly newsletter')); 