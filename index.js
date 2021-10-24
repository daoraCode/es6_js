// push sans push
let fruits = ['Apple', 'Orange', 'Banana'];
fruits = [...fruits, 'Raspberry'];

// Unshift sans unshift
fruits = ['Apple', 'Orange', 'Banana'];
fruits = ['Raspberry', ...fruits];


// Array concatenation
const arr1 = ['A', 'B', 'C'];
const arr2 = ['X', 'Y', 'Z'];

const arr3 = [...arr1, ...arr2];

// Objects
const user = {
  age: 10,
  eyes: 'vert',
  legs: 2,
  arms: 2,
  hair: 'long',
  caracterstique: 'gras du bide',
  nose: 'petit nez',
  ears: 'grandes oreilles',
  glasses: true,
  sosie: 'sarkozy',
};

const bobby = {
  ...user,
  firstName: 'bobby',
};

// forEach
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(num => console.log(num));

// filter
let filteredNumbers = numbers.filter(num => num % 2 !== 0);
console.log(filteredNumbers);

// map
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);