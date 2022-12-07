//----Object------------>>>>
// let spiderman = {
//   name: 'spider',
//   costumeColor: 'redBlack',
//   intelligence: 100,
// }

// let doraemon = {
//   name: 'doraemon',
//   costumeColor: 'blue',
//   intelligence: 10000,
// }

// console.log(spiderman.name);
// console.log(doraemon.name);
// console.log(doraemon.intelligence == spiderman.intelligence);

//------challenge-------->>>>
// create an Array of superheros objects.
// print costume color && name of every superHeroes.
// use Array, for loop, Object, and Function.

let arrayOfSuperheroes = [
  {
    name: "spiderman",
    age: 20,
    costumeColor: "red",
  },
  {
    name: "batman",
    age: 18,
    costumeColor: "black"
  },
  {
    name: "Avengers",
    age: 28,
    costumeColor: "pink"
  }]

function color() {
 for (items of arrayOfSuperheroes) {
   console.log(item.name);
 }
};

color();


