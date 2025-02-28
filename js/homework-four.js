// 1. зробити дві змінні: 
// ПЕРШУ - <myFavoriteGameName> зі значенням вашої улюбленої гри(наприклад "minecraft")
// та ДРУГУ - <myFavoriteGameText> зі значенням рядка = "my favorite game's name" 
// 2.
// За доромогою властивості або метода рядка 
// отримати ОСТАННІЙ символ змінної <myFavoriteGameName>
// та записати це значення у ТРЕТЮ змінну <lastCharacter>.
// 3.
// Зробити перетворення значення змінної <lastCharacter> 
// на ВЕЛИКУ(заглавну літеру).
// 4.
// Вивести в консоль повідомлення, використовуючи 
// значення ВСІХ ТРЬОХ змінних у такому форматі:
// "The last letter in <myFavoriteGameText> "<myFavoriteGameName>" is "<lastCharacter>" !" 
// Використовуйте шаблонний рядок!!
// приклад рядка, що має вийти
// The last letter in my favorite game's name "minecraft" is "T" !

const myFavoriteGameName = "Metro 2033";
const myFavoriteGameText = "my favorite game's name Metro Redux, Metro Last Light and Metro Exodus";
const lastCharacter = myFavoriteGameName.slice(-1);
console.log(`The last letter in ${myFavoriteGameText} "${myFavoriteGameName}" is "${lastCharacter}" !`);

// 1. Створіть дві змінні для зберігання значень двох текстових полів.
//  Перевірте, чи обидві змінні не є порожніми. 
// Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

let text1 = "текст";
let text2 = "текст";

if (text1 !== "" && text2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2. Створіть дві змінні для зберігання числових значень. 
// Обчисліть їх суму. 
// Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

const number1 = 15;
const number2 = 5;
const all = number1 + number2;

if (all > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

// 3. Створіть змінну для зберігання тексту.
//  Перевірте, чи містить цей текст слово "JavaScript". 
// Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

let text = "Я навчаюсь кодити на JavaScript";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4. Створіть змінну для зберігання числа. 
// Перевірте, чи це число більше 10 і менше 20.
//  Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

let number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// 5. Створіть змінні для зберігання значень полів (ім'я, email, пароль).
//  Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів.
//  Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".
    const names = "name";
    const email = "name";
    const login = "name";
  
    console.log("names:", names);
    console.log("email:", email);
    console.log("login:", login);
  
    if (names >= 3 && email.includes("@") && email.indexOf(".") > email.indexOf("@") && login >= 6) {
      console.log("Перенаправлення на іншу сторінку");
    } else {
      console.log("Помилка: неправильне заповнення");
    }