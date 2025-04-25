// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user в форматі ключ:значення -використовуючи Object.keys() і for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// const countProps = function (obj) {
// }

const countProps = function (obj) {
    return Object.keys(obj).length;
  };

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 })); 
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
//  (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості
//  об'єкта в форматі "ім'я":"кількість задач".
// const findBestEmployee = function (employees) {
// };

const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTasks = 0;
  
    for (const employee in employees) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  );

// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
// Функція рахує загальну суму зарплати працівників і повертає її.
//  Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
// const countTotalSalary = function (employees) {
// };

const countTotalSalary = function (employees) {
    let totalSalary = 0;
    for (const employee in employees) {
      totalSalary += employees[employee];
    }
    return totalSalary;
  };
  
  console.log(countTotalSalary({})); // 0
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); 

// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function (arr, prop) {
    const values = [];
    for (const obj of arr) {
      if (prop in obj) {
        values.push(obj[prop]);
      }
    }
    return values;
  };
  
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  console.log(getAllPropValues(products, 'category')); // []


// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
// const calculateTotalPrice = function (allProdcuts, productName) {
// };

const calculateTotalPrice = function (allProdcuts, productName) {
    for (const product of allProdcuts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
  };
  
  console.log(calculateTotalPrice(products, 'Радар')); 
  console.log(calculateTotalPrice(products, 'Дроїд'));