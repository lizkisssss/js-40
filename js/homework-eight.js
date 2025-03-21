// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// Спочатку через for
// Потім через join()

// for
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';
let i = 0;

while (i < friends.length) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', '; 
  }
  i = i + 1
}

console.log(string)

// join
const friends1 = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const string1 = friends.join(',');
console.log(string);

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи), видалити картку додати
// та оновити

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
if (index !== -1) {
    cards.splice(index, 1);
  }
console.log(cards);

const cardToInsert = 'Карточка-6';
cards.push(cardToInsert);
console.log(cards);

const cardToUpdate = 'Карточка-4';
const updatedCard = 'Карточка-4-оновлена';
const index1 = cards.indexOf(cardToUpdate);
if (index1 !== -1) {
    cards[index1] = updatedCard;
  }
  console.log(cards);