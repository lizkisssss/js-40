// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5+5+'5';
console.log(result);
console.log(typeof result);

// Створіть змінну email з вашою електронною адресою. 
// Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів.
// Результат виведіть в консоль.

const email = "lizasalamakha2010@gmail.com";
email.includes('@') ? 
console.log("Email містить символ @") : console.log("Email не містить символ @");

// Записати в окремих змінних кожне слово: My, name, is. 
// Поєднати всі слова в змінну fullName.
//  До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3;
fullName += " Viktor";
console.log(fullName);

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
//  За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього:
//  «Дякуємо, Олександро! До сплати 300 гривень»

const userName = "Олександр";
const payment = 300;
alert(`Дякуємо ${userName}. До сплати ${payment} гривень.`);

// 5. Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
//  Використовуючи метод .indexOf(), знайти і вивести в консоль 
// позицію, на якій знаходиться пробіл між ім'ям та прізвищем.

const fillName = "Єлизавета Саламаха";
const spaceIndex = fullName.indexOf("");
console.log("Позиція пробілу дорівнює:", spaceIndex);

// 6. Написати скрипт пошуку в рядку. Дано:
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';
// const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';
const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';

const hasSpam1 = string1.toLowerCase().includes(blacklistedWord1);
console.log(hasSpam1); 

const hasSale1 = string1.toLowerCase().includes(blacklistedWord2);
console.log(hasSale1);

const hasSpam2 = string2.toLowerCase().includes(blacklistedWord1);
console.log(hasSpam2); 

const hasSale2 = string2.toLowerCase().includes(blacklistedWord2);
console.log(hasSale2); 

const hasSpam3 = string3.toLowerCase().includes(blacklistedWord1);
console.log(hasSpam3); 

const hasSale3 = string3.toLowerCase().includes(blacklistedWord2);
console.log(hasSale3); 