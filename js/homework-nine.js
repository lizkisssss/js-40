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

// Є масив logins з логінами користувачів. 
// Напиши скрипт додавання логіна в масив logins. 
// Логін, який додається повинен:

// проходити перевірку на довжину від 4 до 16-ти символів включно

// бути унікальним, тобто бути відсутнім в масиві logins

// Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію isLoginValid(login), в якій перевір кількість символів 
// параметра login і поверни 
// true або false в залежності від того, чи потрапляє
// довжина параметра в заданий діапазон від 4-х 
// до 16-ти символів включно.

// Напиши функцію isLoginUnique(allLogins, login), 
// яка приймає список всіх логінів і логін, який додається, 
// як параметри і перевіряє наявність login в массиве allLogins,
//  повертає true якщо такого логіна ще немає і false
//  якщо логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:

// Приймає новий логін і масив всіх логінів як параметри

// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid

// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 
// 'Помилка! Логін повинен бути від 4 до 16 символів'

// Якщо логін валідний, функція addLogin перевіряє унікальність
//  логіна за допомогою функції isLoginUnique

// Якщо isLoginUnique поверне false, тоді addLogin 

// Не додає логін в массив масив і повертає рядок
//  'Такий логін уже використовується!'

// Якщо isLoginUnique поверне true, 
// addLogin додає новий логін в logins і
//  повертає рядок 'Логін успішно доданий!'

// 🔔 Принцип єдиної відповідальності 
// функції — кожна функція робить щось одне.
//  Це дозволяє перевикористати код і змінювати
//  логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

// Предикатні функції повертають тільки true або false.
//  Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.

// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.

// addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій — isLoginUnique і isLoginValid.

const logins = ["fkjdjgkldfk", "jdgjdfld", "kdjgkfgjdfkj", "kgkgkkkf"]

const isLoginValid = (login) => {
    if(login.length >= 4 && login.length <= 16){
      return true
    }
    return false
}

const allLogins = ["fgh", "ghk", "ffffff", "eessesese"]

const isLoginvalid = (login) => login.length >= 4 && login.length <= 16;
  
const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
const addLogin = (allLogins, login) => {
  const isValid = isLoginValid(login);
  if (!isValid) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  const isUniqe = isLoginUnique(allLogins, login);
   if (!isUniqe) {
     return "Такий логін уже використовується!";
  }
  
  allLogins.push(login);
  return "Логін успішно доданий!";
};

console.log(addLogin(allLogins, "ffffff"));
console.log(allLogins);