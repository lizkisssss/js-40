// 1. Створити змінні celsius, fahrenheit для зберігання температуриза Цельсієм та Фаренгейтом. 
// Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} градусів Цельсія це ${fahrenheit} градусів за Фаренгейтом`);

// 2. Створити змінну daysInMonth для зберігання кількості днів у місяці. 
// Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множеннята вивести результат в консоль.

const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = daysInMonth * 60;
console.log(`Місяць має ${daysInMonth} днів, ${hoursInMonth} годин та ${minutesInMonth} години`);

// 3. Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. 
// Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log(`Після вашої дії до здоров'я ${health}, енергія буде дорівнювати ${energy}`);

// 4. Створити змінну totalPrice для зберігання суми покупки в магазині.
//  Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення.
//  Результат зберегти в змінній discountedPrice та вивести результат в консоль.

const totalPrice = 100;
const discount = 0.1;
const discountPrice = totalPrice * (1 - discount);
console.log(`Знижка на товар в магазині дорівнює ${discountPrice}`);

// 5. Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. 
// Використати метод Math.floor() для округлення числа до меншого. 
// Результат зберегти в змінній roundedDown та вивести результат в консоль.

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(`Число, яке округлене до меншого буде дорівнювати ${roundedDown}`);

// 6. Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. 
// Використати метод parseFloat() для перетворення рядка у десяткове число.
//  Результат зберегти в змінній parsedFloat та вивести результат в консоль.

const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(`Рядок, який перетворений на десяткове число дорівнюватиме ${parsedFloat}`);

// 7. Створити змінну const intString = "123" для зберігання рядка, який містить ціле число.
//  Використати метод parseInt() для перетворення рядка у ціле число. 
// Результат зберегти в змінній parsedIntта вивести результат в консоль.

const intString = "123";
const parsedInt = parseInt(intString);
console.log(`Збережений рядок, перетворений на ціле число дорівнюватиме ${parsedInt}`);

// 8. Створити змінну number для зберігання числа. 
// Використати метод Math.sqrt() для обчислення квадратного кореня числа.
//  Результат зберегти в змінній sqrtNumber та вивести результат в консоль.

const number = 81;
const sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь з числа ${number} дорівнюватиме ${sqrtNumber}`);

// 9. Створити змінну const stringNumber = "256" для зберігання  рядка з числом у вигляді рядка.
//  Використати метод parseInt() для перетворення рядка у ціле число. 
// Результат зберегти в змінній convertedstring та вивести результат в консоль.

const stringNumber = "256";
const convertedstring = parseInt(stringNumber);
console.log(`Перетворене число, яке було дано за умовою в завданні, дорівнюватиме ${convertedstring}`);