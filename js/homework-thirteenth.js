//1. Перебрати об'єкти з попереднього дз
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
    const value = user[key]; 
    console.log(`${key}: ${value}`);
  }

const countProps = function (obj) {
    return Object.keys(obj).length;
  };
  
  console.log(countProps({})); 
  console.log(countProps({ name: 'Mango', age: 2 })); 
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 



  const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTasks = 0;
  
    for (const employee in employees) {
      const tasks = employees[employee]; 
      if (tasks > maxTasks) {
        maxTasks = tasks;
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

  const countTotalSalary = function (employees) {
    let totalSalary = 0;
    for (const employee in employees) {
      const salary = employees[employee]; 
      totalSalary += salary;
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
        const value = obj[prop]; 
        values.push(value);
      }
    }
    return values;
  };
  
  console.log(getAllPropValues(products, 'name')); 
  console.log(getAllPropValues(products, 'quantity')); 
  console.log(getAllPropValues(products, 'category')); 


  const calculateTotalPrice = function (allProdcuts, productName) {
    for (const product of allProdcuts) {
      const { name, price, quantity } = product; 
      if (name === productName) {
        return price * quantity;
      }
    }
    return 0;
  };
  
  console.log(calculateTotalPrice(products, 'Радар')); 
  console.log(calculateTotalPrice(products, 'Дроїд')); 


/*
 * Типів транзакцій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  const account = {
    balance: 0,
    transactions: [],
    _transactionIdCounter: 0,
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
      this._transactionIdCounter += 1;
      return {
        id: this._transactionIdCounter,
        type,
        amount,
      };
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
      this.balance += amount;
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
      if (amount > this.balance) {
        console.log('Зняття такої суми неможливе, недостатньо коштів.');
        return;
      }
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
      return null;
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let totalAmount = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          totalAmount += transaction.amount;
        }
      }
      return totalAmount;
    },
  };

console.log('Початковий стан рахунку:', account);
account.deposit(150);
console.log('Після поповнення на 150:', account);
account.withdraw(50);
console.log('ісля зняття 50:', account);
console.log('Поточний баланс:', account.getBalance());
const transactionDetails = account.getTransactionDetails(1);
console.log('Деталі транзакції з ID 1:', transactionDetails);
console.log(
  'Загальна сума поповнень:',
  account.getTransactionTotal(Transaction.DEPOSIT),
);
console.log(
  'Загальна сума зняттів:',
  account.getTransactionTotal(Transaction.WITHDRAW),
);
account.withdraw(200);
console.log('Кінцевий стан рахунку:', account);
console.log('Історія транзакцій:');
for (const transaction of account.transactions) {
  console.log(`ID: ${transaction.id}, Тип: ${transaction.type}, Сума: ${transaction.amount}`);
}