const processArray = (array, callback) => {
    return callback(array);
  };
  
const getSum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };
  
const getMin = (arr) => {
    return Math.min(...arr);
  };
  
const getMax = (arr) => {
    return Math.max(...arr);
  };

const numbers = [1, 5, 2, 8, 3];
const numbers2 = [10, -5, 0, 15, -2];
  
console.log("Сума елементів масиву numbers:", processArray(numbers, getSum));
console.log("Мінімальний елемент масиву numbers:", processArray(numbers, getMin));
console.log("Максимальний елемент масиву numbers:", processArray(numbers, getMax));
  
console.log("Сума елементів масиву numbers2:", processArray(numbers2, getSum));
console.log("Мінімальний елемент масиву numbers2:", processArray(numbers2, getMin));
console.log("Максимальний елемент масиву numbers2:", processArray(numbers2, getMax));
  
const getSumArrow = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const getMinArrow = (arr) => Math.min(...arr);
const getMaxArrow = (arr) => Math.max(...arr);
  
console.log("Сума елементів масиву numbers (стрілкова функція):", processArray(numbers, getSumArrow));
console.log("Мінімальний елемент масиву numbers (стрілкова функція):", processArray(numbers, getMinArrow));
console.log("Максимальний елемент масиву numbers (стрілкова функція):", processArray(numbers, getMaxArrow));
  
console.log("Сума елементів масиву numbers2 (стрілкова функція):", processArray(numbers2, getSumArrow));
console.log("Мінімальний елемент масиву numbers2 (стрілкова функція):", processArray(numbers2, getMinArrow));
console.log("Максимальний елемент масиву numbers2 (стрілкова функція):", processArray(numbers2, getMaxArrow));

const operate = (a, b, callback) => {
    return callback(a, b);
};
  

const add = (a, b) => a + b;
console.log("Додавання:", operate(10, 5, add));
  
const subtract = (a, b) => a - b;
console.log("Віднімання:", operate(10, 5, subtract));
  
const multiply = (a, b) => a * b;
console.log("Множення:", operate(10, 5, multiply));
  
const divide = (a, b) => a / b;
console.log("Ділення:", operate(10, 5, divide));
  

  
console.log("Додавання (стрілкова функція):", operate(10, 5, (a, b) => a + b));
console.log("Віднімання (стрілкова функція):", operate(10, 5, (a, b) => a - b));
console.log("Множення (стрілкова функція):", operate(10, 5, (a, b) => a * b));
console.log("Ділення (стрілкова функція):", operate(10, 5, (a, b) => a / b));