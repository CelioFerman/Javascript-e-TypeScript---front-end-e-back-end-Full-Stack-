const myName = 'Célio';
const lastName = 'Fermano';
let age = 30;
let work = 'Developer';
const heightInMetric = 1.8;
const weight = 87;
let imc;
let birthYear;

imc = weight / (heightInMetric * heightInMetric);
birthYear = 2024 - age;


favoriteMovies = [
  'Harry Potter',
  'Avengers',
  'Justice League',
  'Matrix',
  'Star Wars',
];

favoriteGames = [
  'Counter Strike',
  'Halo',
  'God Of War',
  'Metroid',
  'Call of Duty',
  'Forza Horizon',
];

myFavoriteLanguages = ['JavaScript', 'CSharp', 'CSS', 'HTML', 'Java'];

console.log(`My name is ${myName} ${lastName}. I have ${age} years. Im work with ${work}.
  Some of my favorite movies Im watching right now is ${favoriteMovies}.
  I have one favorite game what is ${favoriteGames}. My favorite language is ${myFavoriteLanguages}.
  My IMC is ${imc} and the year I was born was ${birthYear}.`);
