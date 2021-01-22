/* Temperature Converter
//Set kelvin
const kelvin = 300;

//convert to celsius
const celsius = kelvin - 273;

//convert to fehrenheight
const fehrenheight = Math.floor(celsius*(9/5)+32);

console.log(`Kelvin = ${kelvin}`);
console.log(`Celsius = ${celsius}`);
console.log(`Fehrenheit = ${fehrenheight}`);
*/

/*// Tests for Truthy & Falsy
//Takes value from username or if empty inputs default value
let username='ap';
let defaultName = username || 'Stranger';
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
console.log(defaultName);
*/

/* //Meal Maker
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //getters are called to get value
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.desserts;
  },
  get desserts() {
    return this._courses.desserts;
  },
  //setters are called to set value. Value is passed and set
  set appetizers(appetizer) {
    this._courses.appetizers = appetizer;
  },
  set mains(main) {
    this._courses.mains = main;
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  //will directly add new dishes to _cources
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    menu._courses[courseName].push(dish);
  },
  //generate random dish based on the items we added
  getRandomDishFromCourse(courseName) {
    const dishes = menu._courses[courseName];
    const index = Math.floor(Math.random()*dishes.length);
    return dishes[index];
  },
  //generate random meal
  generateRandomMeal(){
    const appetizers = menu.getRandomDishFromCourse('appetizers');
    const mains = menu.getRandomDishFromCourse('mains');
    const desserts = menu.getRandomDishFromCourse('desserts');
    const totalCost = appetizers.price + mains.price + desserts.price;
    return `Total cost is for ${appetizers.name}, ${mains.name}, ${desserts.name}: ${totalCost}`;
  }
};

menu.addDishToCourse("appetizers", "Salad", 2);
menu.addDishToCourse("appetizers", "Papar", 1);
menu.addDishToCourse("appetizers", "Pakora", 3);

menu.addDishToCourse("mains", "Dal Makhni", 9);
menu.addDishToCourse("mains", "Sahi Paneer", 10);
menu.addDishToCourse("mains", "Chicken Tikka", 13);

menu.addDishToCourse("desserts", "Rashula", 1);
menu.addDishToCourse("desserts", "Ice cream", 2);
menu.addDishToCourse("desserts", "Laddu", 1);
menu.getRandomDishFromCourse("appetizers");
menu.getRandomDishFromCourse("appetizers");
console.log(menu.generateRandomMeal());
*/

/* //Team Stats
const team = {
  //object in array pg 119
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 11 },
    { firstName: "Lolo", lastName: "Daz", age: 15 },
    { firstName: "Gana", lastName: "Dosa", age: 13 },
  ],
  _games: [
    { opponent: "Brazil", teamPoints: 42, opponentPoints: 27 },
    { opponent: "USA", teamPoints: 33, opponentPoints: 55 },
    { opponent: "Canada", teamPoints: 40, opponentPoints: 30 },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  //Add players
  addPlayer(firstName,lastName,age){
    this._players.push({firstName,lastName,age});
  },
  //Add scores
  addGame(opponent,teamPoints,opponentPoints){
    this._games.push({opponent,teamPoints,opponentPoints});
  }
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Lislie',44);
team.addPlayer('Bugs','CuBunnyrry',76);
console.log(team.players);

team.addGame('India',11,28);
team.addGame('Australia',54,44);
team.addGame('China',12,76);
console.log(team.games);
*/

// const a = document.getElementById("para");
// a.textContent =
