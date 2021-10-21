let fruits = ['Apple', 'Orange', 'Banana'];
// fruits = [...fruits, 'Raspberry'];
console.log(fruits);

fruits = ['Apple', 'Orange', 'Banana'];
fruits = ['Raspberry', ...fruits];
console.log(fruits);

const arr1 = ['A', 'B', 'C'];
const arr2 = ['X', 'Y', 'Z'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

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
console.log(bobby);
