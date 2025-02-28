//1. Створіть змінну, що симулює вибір варіанта зі списку.
//  Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". 
// Використайте switch

const drink = "чай";
switch (drink){
    case "Кава":
        console.log("Ви обрали каву")
        break;
    case "чай":
        console.log("Ви обрали чай")
        break
    case "сік":
        console.log("Ви обрали сік")
        break
     default:
        console.log("Invalid Value");
}

//2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
//  Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

const day = "Субота"; 

if (day === "Субота" || day === "Неділя") {
  console.log("Вихідний день.");
} else {
  console.log("Робочий день.");
}

//3. Створіть змінну для зберігання номера місяця.
//  За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const month = 12; // 

if (month >= 3 && month <= 5) {
  console.log("Весна.");
} else if (month >= 6 && month <= 8) {
  console.log("Літо.");
} else if (month >= 9 && month <= 11) {
  console.log("Осінь.");
} else {
  console.log("Зима.");
}

//4. Створіть змінну для зберігання назви кольору. 
// Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = "жовтий"; 

switch (color) {
  case "червоний":
    console.log("Стоп!");
    break;
  case "зелений":
    console.log("Йти!");
    break;
  case "жовтий":
    console.log("Чекати!");
    break;
    default:
        console.log("Invalid Value");
}

//5. Створіть змінні для зберігання двох чисел та оператора (як у списку select).
//  Виконайте відповідну операцію та виведіть результат. 
// У випадку ділення на нуль — виведіть попередження.

const num1 = 10;
const num2 = 0;
const operator = "/"; 

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль!");
    } else {
      console.log(num1 / num2);
    }
    break;
  default:
    console.log("Invalide Value");
}