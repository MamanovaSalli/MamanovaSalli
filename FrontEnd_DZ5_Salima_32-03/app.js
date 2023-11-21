// задание 1
let numbers = [2, 3, 3, 4, 4, 54,76, 8,  89, 76, 89, 6, 4, 3, 56, 23, 2, 3, 6, 76, 56, 23, 4, 56, 89,]
let arr = new Set(numbers)
let array = Array.from(arr)
console.log(array)


// задание 2
let books = ['Джордж Оруэлл', 'К себе нежно', 'Любить Счетать', 'Окуучу кыз', 'Путь', 'Харизма', 'Магия утра', 'Дар', 'Выбор']
let booksFil = books.filter(i => i.includes('у'))
let booksFil2 = books.filter(i => !i.includes('у'))
let booksMap = booksFil.map(i => i + '- книга с буквой "у"')

  console.log('Книги с буквой "у":');
  booksMap.forEach(i => console.log(i));

console.log('Остальные книги:')
booksFil2.forEach( i => console.log(i))


// задание 3

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Sam', age: 18 },
  { name: 'Daniel', age: 35 },
  { name: 'Eve', age: 28 },
  { name: 'Frank', age: 40 },
  { name: 'Ely', age: 19 },
  { name: 'Hank', age: 27 }
];

const youngestUser = users.reduce((youngest, user)  => (user.age < youngest.age ? user : youngest), users[0]);

const oldestUser = users.reduce((oldest, user) => (user.age > oldest.age ? user : oldest), users[0]);

const ageDifference = Math.abs(oldestUser.age - youngestUser.age);

console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`);



