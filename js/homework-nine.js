// Напиши функцію logItems(array), 
// яка отримує масив і використовує цикл for,
//  який для кожного елемента масиву буде виводити в консоль 
// повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] 
// з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const myArray = ['Mango', 'Poly', 'Ajax'];
logItems(myArray);

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }

// Напиши скрипт підрахунку вартості гравіювання прикрас.
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//  приймаючу рядок (в рядку будуть тільки слова і прогалини)
//  і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const message1 = 'JavaScript is in my blood';
const price1 = calculateEngravingPrice(message1, 10);
console.log(price1); 

const message2 = 'Web-development is creative work';
const price2 = calculateEngravingPrice(message2, 20);
console.log(price2);

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const wordCount = words.length;
    const totalPrice = wordCount * pricePerWord;
    return totalPrice;
  }

// Напиши функцію findLongestWord(string), 
// яка приймає параметром довільний рядок
//  (в рядку будуть тільки слова і прогалини) 
// і повертає найдовше слово в цьому рядку.

const string1 = 'Ukraine - it is very good and interesting country for live to this';
const longest1 = findLongestWord(string1);
console.log(longest1);

const string2 = 'Google - is very big browser';
const longest2 = findLongestWord(string2);
console.log(longest2);

const string3 = 'My favourite months - June, July, August';
const longest3 = findLongestWord(string3);
console.log(longest3); 

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const shortString = 'This is short';
const longString =
  'Це дуже довгий рядок, який потрібно обрізати, щоб він не перевищував 40 символів';

console.log(formatString(shortString)); 
console.log(formatString(longString));

function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + '...';
    }
  }

//   Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
//  Функція перевіряє її на вміст слів spam і sale. 
// Якщо знайшли заборонене слово, то функція повертає true,
//  якщо заборонених слів немає функція повертає false.
//  Слова в рядку можуть бути в довільному регістрі.

console.log(checkForSpam('New technology is so good for us and sale this')); 
console.log(checkForSpam('C++ not bad programming')); 
console.log(checkForSpam('SALE for todat')); 
console.log(checkForSpam('How to learning the JavaScript?'))

  function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase(); 
    const spamWords = ['spam', 'sale']; 
  
    for (const word of spamWords) {
      if (normalizedMessage.includes(word)) {
        return true; 
      }
    }
    return false;
  }