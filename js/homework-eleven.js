// 1. Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", 
// який дозволяє знімати гроші з рахунку. 
// Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. 
// Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: "Іван Петренко",
    accountNumber: "UA12345678901234567890",
    balance: 1000
  };
  
  function deposit(account, amount) {
    if (confirm(`Ви впевнені, що хочете поповнити рахунок ${account.accountNumber} на ${amount} грн?`)) {
      account.balance += amount;
      alert(`Рахунок ${account.accountNumber} поповнено на ${amount} грн. Залишок: ${account.balance} грн.`);
    } else {
      alert("Операцію поповнення скасовано.");
    }
  }
  
  function withdraw(account, amount) {
    if (confirm(`Ви впевнені, що хочете зняти ${amount} грн з рахунку ${account.accountNumber}?`)) {
      if (amount <= account.balance) {
        account.balance -= amount;
        alert(`З рахунку ${account.accountNumber} знято ${amount} грн. Залишок: ${account.balance} грн.`);
      } else {
        alert("Недостатньо коштів на рахунку.");
      }
    } else {
      alert("Операцію зняття скасовано.");
    }
  }
  const depositAmount = parseFloat(prompt("Введіть суму для поповнення:"));
  if (!isNaN(depositAmount)) {
    deposit(bankAccount, depositAmount);
  }
  
  const withdrawAmount = parseFloat(prompt("Введіть суму для зняття:"));
  if (!isNaN(withdrawAmount)) {
    withdraw(bankAccount, withdrawAmount);
  }
  
  alert(`Поточний залишок на рахунку ${bankAccount.accountNumber}: ${bankAccount.balance} грн.`);

// 2. Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
//  Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія,
//  та "false", якщо температура вище або рівна 0 градусів Цельсія. 
// Температуру потрібно отримати з prompt(). 
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: null,
    humidity: null,
    windSpeed: null,
    isFreezing: function() {
      this.temperature = parseFloat(prompt("Введіть поточну температуру в градусах Цельсія:"));
      if (isNaN(this.temperature)) {
        const errorMessage = "Будь ласка, введіть коректне числове значення для температури.";
        console.log(errorMessage);
        alert(errorMessage);
        return null;
      }
  
      const isBelowZero = this.temperature < 0;
      const message = isBelowZero ? "Температура нижче 0 градусів Цельсія" : "Температура 0 градусів Цельсія або вище";
  
      console.log(message);
      alert(message);
  
      return isBelowZero;
    }
  };

// 3. Створіть об’єкт "user", який буде мати властивості "name", "email", "password". 
// Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
    name: "Олена Сидоренко",
    email: "olena.sydorenko@example.com",
    password: "securePassword123",
    login: function() {
      const enteredEmail = prompt("Введіть ваш email:");
      const enteredPassword = prompt("Введіть ваш пароль:");
  
      if (enteredEmail === this.email && enteredPassword === this.password) {
        alert("Вхід успішний!");
        return true;
      } else {
        alert("Неправильний email або пароль.");
        return false;
      }
    }
  };

// 4. Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
// Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false",
//  якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 

const movie = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    rating: 8.6,
    isHighlyRated: function() {
      return this.rating > 8;
    }
  };
  console.log("Назва фільму:", movie.title);
  console.log("Режисер:", movie.director);
  console.log("Рік випуску:", movie.year);
  console.log("Рейтинг:", movie.rating);
  console.log("Фільм має високий рейтинг:", movie.isHighlyRated());