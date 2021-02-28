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

//Dog Age
// let myAge = 22;

// let earlyYears = 2;
// earlyYears *= 10.5;
// console.log(`Eary years age ${earlyYears}`);

// let laterYears = myAge - 2;
// laterYears *= 4;
// console.log(`Eary years age ${laterYears}`);

// console.log();
// console.log(`${myAge} human years = ${earlyYears + laterYears} dog year`);

// //Tryly Falsi
// const trulyorfalsy = (f) => {
//   if (Boolean(f)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(trulyorfalsy([]));

//Race number assigning
// let raceNumber = Math.floor(Math.random() * 1000);
// let registerEarly = true;
// const age = 24;

// if (registerEarly && age >= 18) {
//   raceNumber += 1000;
// }

// if (registerEarly && age >= 18) {
//   console.log(
//     `Early adults run at 9:30 am & registration number = ${raceNumber}`
//   );
// } else if (!registerEarly && age >= 18) {
//   console.log(
//     `Early adults run at 11:00 am & registration number = ${raceNumber}`
//   );
// } else if (age < 18) {
//   console.log(
//     `Youth registrants run at 12:30 pm & registration number = ${raceNumber}`
//   );
// }

// //rock paper scissor
// const userInput = (choice) => {
//   if (choice === "rock" || choice === "scissors" || choice === "paper") {
//     return choice;
//   } else {
//     return "Enter correct input";
//   }
// };

// const computerInput = () => {
//   const a = Math.floor(Math.random() * 3);
//   if (a === 0) {
//     return "rock";
//   } else if (a === 1) {
//     return "scissors";
//   } else {
//     return "paper";
//   }
// };

// const winner = (me = userInput("scissors"), computer = computerInput()) => {
//   console.log(`Me: ${me} & Computer: ${computer}`);
//   if (me === computer) {
//     console.log("Draw");
//   } else if (
//     (me === "rock" && computer === "scissors") ||
//     (me === "scissors" && computer === "paper") ||
//     (me === "paper" && computer === "rock")
//   ) {
//     console.log("Me Win");
//   } else {
//     console.log("Computer Win");
//   }
// };

// winner();

// //mutual Firends
// // Write your code below
// const bobsFollowers = ['a','b','c','d'];
// const tinasFollowers= ['c','d','e'];
// let mutualFollowers=[];

// for(let x= 0; x<bobsFollowers.length;x++){
//     for(let y=0;y<tinasFollowers.length;y++){
//       if(bobsFollowers[x]===tinasFollowers[y]){
//         mutualFollowers.push(bobsFollowers[x])
//       }
//     };
// };

// // console.log(mutualFollowers);

// //Whale Talk
// const input = "turpentine and turtles";
// const vowels = ["a", "e", "i", "o", "u"];
// const resultArray = [];

// for (let a = 0; a < input.length; a++) {
//   for (let b = 0; b < vowels.length; b++) {
//     if (
//       (input[a] === vowels[b] && input[a] == "u") ||
//       (input[a] === vowels[b] && input[a] === "e")
//     ) {
//       resultArray.push(vowels[b], vowels[b]);
//     } else if (input[a] === vowels[b]) resultArray.push(vowels[b]);
//   }
// }

// console.log(resultArray.join("").toUpperCase());

// // let s = "";
// // for (let x = 0; x < resultArray.length; x++) {
// //   s += resultArray[x];
// // }
// // console.log(s);

// let story =
//   'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// let overusedWords = ["really", "very", "basically"];

// let unnecessaryWords = ["extremely", "literally", "actually"];

// //1,2 split the sentence to words array
// const storyWords = story.split(" ");
// console.log("Word count: " + storyWords.length);

// //3 filter words from array
// const betterWords = storyWords.filter((word) => {
//   return !unnecessaryWords.includes(word);
// });
// console.log("After unnecessaryWords: " + betterWords.length);

// //3 Remove duplicate
// /*const betterWords = storyWords.filter((item,index)=>{
//   return storyWords.indexOf(item) === index;
// });
// console.log(betterWords);*/

// /*
// //4 count sepcific words in array (long form)
// sum = (arr, val) => {
//   return arr.reduce((acc, elem) => {
//     return elem === val ? acc + 1 : acc;
//   }, 0);
// };

// let count1 = sum(storyWords, "very");
// console.log(count1);
// */
// //4 count sepcific words in array (short form)
// const count = (arr, val) =>
//   arr.reduce((acc, elem) => (elem === val ? acc + 1 : acc), 0);
// console.log("Really count: " + count(storyWords, "really"));

// const count3 = (arr, val) =>
//   arr.reduce((acc, elem) => (elem === val ? acc + 1 : acc), 0);
// console.log("Very count: " + count3(storyWords, "very"));

// const count2 = (arr, val) =>
//   arr.reduce((acc, elem) => (elem === val ? acc + 1 : acc), 0);
// console.log("Basically count: " + count2(storyWords, "basically"));

// //5 Sentences in paragraph
// //split paragraphy (condition: .!)
// const storyWords2 = story.trim("").split(/[.!]/);
// //filter empty array  (condition: '') & find length
// console.log("No of sentences: " + storyWords2.filter((v) => v != "").length);

// //7 join array
// console.log(betterWords.join(" "));

//Code chanllenge immediate javascript
//1
// const sentence = ["sense.", "make", "all", "will", "This"];
// const reverseArray = (arr) => {
//   for (let x = arr.length - 1; x >= 0; x--) {
//     arr.push(arr.pop());
//   }
//   return arr;
// };

// console.log(reverseArray(sentence));

//2
// function greetAliens (arr)  {
//   for(let x = 0; x<arr.length ; x++){
//     console.log(`Oh powerful ${arr[x]}, we humans offer our unconditional surrender! `)
//   }
// }
// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
// greetAliens(aliens);

//3
// function convertToBaby(arr) {
//   let newArr = [];
//   for (let x = 0; x < arr.length; x++) {
//     let y = "baby " + arr[x];
//     newArr.push(y);
//   }
//   return newArr;
// }

// const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
// console.log(convertToBaby(animals));

//4
// const numbers = [5, 3, 9, 30];

// const smallestPowerOfTwo = arr => {
//       let results = [];

//       for (let i = 0; i < arr.length; i++) {
//             number = arr[i];

//             let j = 1;
//             while (j < number) {
//                   j = j * 2;
//             }
//             results.push(j);
//       }
//       return results
// }

// console.log(smallestPowerOfTwo(numbers))
// // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

//6
// const numbers = [2, 7, 9, 171, 52, 33, 14];
// const toSquare = (num) => num * num;

// const squareNums = (arr) => arr.map((x) => toSquare(x));

// console.log(numbers);

//7
// const shoutGreetings = arr => arr.map(x=> x = x.toUpperCase() + '!');
// const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
// console.log(shoutGreetings(greetings))
// // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

//8
// const sortYears = arr => arr.sort((a,b)=> b-a);

// const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
// console.log(sortYears(years))
// // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//9
// const justCoolStuff = (arr1,arr2) =>  arr1.filter( x => arr2.includes(x));

// const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

// const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

// console.log(justCoolStuff(myStuff, coolStuff))
// // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//10
// const isTheDinnerVegan = arr => arr.every(x=> x.source==='plant');

// const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// console.log(isTheDinnerVegan(dinner))
// // Should print false

//11
// const speciesArray = [
//   { speciesName: "shark", numTeeth: 50 },
//   { speciesName: "dog", numTeeth: 42 },
//   { speciesName: "alligator", numTeeth: 80 },
//   { speciesName: "human", numTeeth: 32 },
// ];

// const sortSpeciesByTeeth = (arr) => arr.sort((x, y) => x.numTeeth - y.numTeeth);

// console.log(sortSpeciesByTeeth(speciesArray));

// // Should print:
// // [ { speciesName: 'human', numTeeth: 32 },
// //   { speciesName: 'dog', numTeeth: 42 },
// //   { speciesName: 'shark', numTeeth: 50 },
// //   { speciesName: 'alligator', numTeeth: 80 } ]

//12
// const findMyKeys = (arr) => arr.findIndex((x) => x === "keys");

// const randomStuff = [
//   "credit card",
//   "screwdriver",
//   "receipt",
//   "gum",
//   "keys",
//   "used gum",
//   "plastic spoon",
// ];

// console.log(findMyKeys(randomStuff));
// // Should print 4

//13
// const dogFactory = (name, breed, weight) => {
//   return {
//     _name: name,
//     _breed: breed,
//     _weight: weight,
//     get name() {
//       return this._name;
//     },
//     set name(newName) {
//       this._name = newName;
//     },
//     get breed() {
//       return this._breed;
//     },
//     set breed(newBreed) {
//       this._breed = newBreed;
//     },
//     get weight() {
//       return this._weight;
//     },
//     set weight(newWeight) {
//       this._weight = newWeight;
//     },
//     bark(){
//       return 'ruff! ruff'
//     },
//     eatTooManyTreats(){
//       return this._weight++;
//     }
//   };
// };
// console.log(dogFactory("Joe", "Pug", 27));
// console.log()

//factorial
// const factorial = (num) => {
//   let x = 1;
//   while (num > 0) {
//     x *= num;
//     num--;
//   }
//   console.log(x);
// };
// factorial(1);

//letter distance in a word
// const subLength = (str, letter) => {
//   var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter) {
//       letter_Count += 1;
//     }
//   }
//   if (letter_Count > 1 && letter_Count < 3) {
//     let x = str.indexOf(letter);
//     let y = str.indexOf(letter, x + 1);
//     return y - x + 1;
//   } else {
//     return 0;
//   }
// };

// console.log(subLength("Saturday", "a")); // returns 6
// console.log(subLength("summer", "m")); // returns 2
// console.log(subLength("digitize", "i")); // returns 0
// console.log(subLength("cheesecake", "k")); // returns 0

// add , and
// const groceries = (arr) => {
//   let string = "";
//   for (let x = 0; x < arr.length; x++) {
//     if (x < arr.length - 2) {
//       string += arr[x].item + ", ";
//     } else if (x === arr.length - 2) {
//       string += arr[x].item + " and ";
//     } else if (x >= arr.length - 2) {
//       string += arr[x].item;
//     }
//   }
//   console.log(string);
// };

// groceries([
//   { item: "Carrots" },
//   { item: "Hummus" },
//   { item: "Pesto" },
//   { item: "Rigatoni" },
// ]);
// //returns 'Carrots, Hummus, Pesto and Rigatoni'

// groceries([{ item: "Bread" }, { item: "Butter" }]);
// // returns 'Bread and Butter'

// groceries([{ item: "Cheese Balls" }]);
// // returns 'Cheese Balls'
// groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])

//Library Classes
// class Media {
//   constructor(title) {
//     this._title = title;
//     this._isCheckedOut = false;
//     this._ratings = [];
//   }

//   //title
//   get title() {
//     return this._title;
//   }

//   //isCheckout
//   get isCheckedOut() {
//     return this._isCheckedOut;
//   }
//   set isCheckedOut(checkout) {
//     this._isCheckedOut = checkout;
//   }
//   toggleCheckOutStatus() {
//     if (this.isCheckedOut) {
//       this.isCheckedOut = false;
//     } else {
//       this.isCheckedOut = true;
//     }
//   }
//   //rating
//   get ratings() {
//     return this._ratings;
//   }
//   addRating(rating) {
//     this._ratings.push(rating);
//   }
//   getAverageRating() {
//     let x = this._ratings.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     );
//     return x / this._ratings.length;
//   }
// }

// class Book extends Media {
//   constructor(author, title, pages) {
//     super(title);
//     this._author = author;
//     this._pages = pages;
//   }

//   get author() {
//     return this._author;
//   }
//   get pages() {
//     return this._pages;
//   }
// }

// class Movie extends Media {
//   constructor(director, title, runTime) {
//     super(title);
//     this._director = director;
//     this._runTime = runTime;
//   }

//   get director() {
//     return this._director;
//   }
//   get runTime() {
//     return this._runTime;
//   }
// }

// //create object
// const historyOfEverything = new Book(
//   "Bill Bryson",
//   "A Short History of Nearly Everything",
//   544
// );
// //change status
// historyOfEverything.toggleCheckOutStatus();
// console.log("Book Title: " + historyOfEverything.title);
// console.log("Book Checkout: " + historyOfEverything.isCheckedOut);
// //add rating
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
// console.log("Book Avg rating: " + historyOfEverything.getAverageRating());

// //20 new object
// const speed = new Movie("Jan de Bont", "Speed", 116);
// //change status
// speed.toggleCheckOutStatus();
// console.log("Movie Title: " + speed.title);
// console.log("Movie Checkout: " + speed.isCheckedOut);
// //add rating
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);
// console.log("Movie Avg rating: " + speed.getAverageRating());

//School catalogue
// class School {
//   constructor(name, level, numberOfStudents) {
//     this._name = name;
//     this._level = level;
//     this._numberOfStudents = numberOfStudents;
//   }
//   get name() {
//     return this._name;
//   }
//   get level() {
//     return this._level;
//   }
//   get numberOfStudents() {
//     return this._numberOfStudents;
//   }
//   //set no of students
//   set numberOfStudents(number) {
//     if (typeof number === "number") {
//       this._numberOfStudents = number;
//     } else {
//       console.log("Invalid input: numberOfStudents must be set to a Number.");
//     }
//   }
//   quickFacts() {
//     console.log(
//       `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
//     );
//   }
//   static pickSubstituteTeacher(substituteTeachers) {
//     let x = Math.floor(Math.random() * substituteTeachers.length);
//     return substituteTeachers[x];
//   }
// }

// class PrimarySchool extends School {
//   constructor(name, numberOfStudents, pickupPolicy) {
//     super(name, "primary", numberOfStudents);
//     this._pickupPolicy = pickupPolicy;
//   }

//   get pickupPolicy() {
//     return this._pickupPolicy;
//   }
// }

// class MiddleSchool extends School {
//   constructor(name, numberOfStudents) {
//     super(name, "middle", numberOfStudents);
//   }
// }

// class HighSchool extends School {
//   constructor(name, numberOfStudents, sportsTeam) {
//     super(name, "high", numberOfStudents);
//     this._sportsTeam = sportsTeam;
//   }

//   get sportsTeam() {
//     return this._sportsTeam;
//   }
// }

// //add object of PrimarySchool
// const lorraineHansbury = new PrimarySchool(
//   "Lorraine Hansbury",
//   514,
//   "Students must be picked up by a parent, guardian, or a family member over the age of 13."
// );
// lorraineHansbury.quickFacts();

// //set substitute teachers
// console.log(
//   "Substitute Teacher: " +
//     PrimarySchool.pickSubstituteTeacher([
//       "Jamal Crawford",
//       "Lou Williams",
//       "J. R. Smith",
//       "James Harden",
//       "Jason Terry",
//       "Manu Ginobli",
//     ])
// );

// //add object of HighSchool
// const alSmith = new HighSchool("Al E. Smith", 415, [
//   "Baseball",
//   "Basketball",
//   "Volleyball",
//   "Track and Field",
// ]);
// console.log(alSmith.sportsTeam);

// import {
//   availableAirplanes,
//   flightRequirements,
//   meetsStaffRequirements,
// } from "./module/airplane.mjs";

// function displayFuelCapacity() {
//   availableAirplanes.forEach((x) =>
//     console.log("Fuel Capacity of " + x.name + ":" + x.fuelCapacity)
//   );
// }

// // function displayStaffStatus(){
// //   availableAirplanes.forEach(function(element) {
// //    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
// //   });
// // }

// function displayStaffStatus() {
//   availableAirplanes.forEach((x) =>
//     console.log(
//       `${x.name} meets staff requirements: ${meetsStaffRequirements(
//         x.availableStaff,
//         flightRequirements.requiredStaff
//       )}`
//     )
//   );
// }

// //calling function
// displayFuelCapacity();
// displayStaffStatus();

//Practice Export Import

// //ES5 METHOD 1
// const MessageMixer = require("./module/messageMixer.mjs");
// // prettier-ignore
// function displayMessage() {
//     console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
//     console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//     console.log(MessageMixer.reverseWord("What is the color of the sky?"));
//     console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
//     console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?","sky","water"));
//     console.log(MessageMixer.encode("What is the color of the sky?"));
//     console.log(MessageMixer.palindrome("What is the color of the sky?"));
//     console.log(MessageMixer.pigLatin("What is the color of the sky?",'_'));
//   }
// displayMessage();

// //ES6 METHOD 1 - import, export default
// import MessageMixer from "./module/messageMixer.mjs";
// // prettier-ignore
// function displayMessage() {
//   console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
//   console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//   console.log(MessageMixer.reverseWord("What is the color of the sky?"));
//   console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
//   console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?","sky","water"));
//   console.log(MessageMixer.encode("What is the color of the sky?"));
//   console.log(MessageMixer.palindrome("What is the color of the sky?"));
//   console.log(MessageMixer.pigLatin("What is the color of the sky?",'_'));
// }
// displayMessage();

// //ES6 METHOD 2 - name import, name export
// import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin } from "./module/messageMixer.mjs";
// // prettier-ignore
// function displayMessage() {
//     console.log(countCharacter("What is the color of the sky?", "t"));
//     console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//     console.log(reverseWord("What is the color of the sky?"));
//     console.log(reverseAllWords("What is the color of the sky?"));
//     console.log(replaceFirstOccurence("What is the color of the sky?","sky","water"));
//     console.log(encode("What is the color of the sky?"));
//     console.log(palindrome("What is the color of the sky?"));
//     console.log(pigLatin("What is the color of the sky?",'_'));
//   }
// displayMessage();

// //Workaround practice program
// import {
//   Employee,
//   cadre as getCadre,
//   tax as calculateTax,
//   benefits as getBenefits,
//   bonus as calculateBonus,
//   reimbursement as reimbursementEligibility,
// } from "./module/workAround.mjs";

// // prettier-ignore
// function getEmployeeInformation(inputSalary) {
//   Employee.salary = inputSalary;
//   console.log("Cadre: " + getCadre());
//   console.log("Tax: " + calculateTax());
//   console.log("Benefits: " + getBenefits());
//   console.log("Bonus: " + calculateBonus());
//   console.log("Reimbursement Eligibility: " + reimbursementEligibility() + "\n");
// }

// getEmployeeInformation(10000);
// getEmployeeInformation(50000);
// getEmployeeInformation(100000);


// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344
// };

// // Write your code below:
// const myExecutor = (resolve, reject) => {
//   if (inventory.sunglasses>0) {
//       resolve('Sunglasses order processed.');
//   } else {
//       reject( 'That item is sold out.'); 
//   }
// }
// const orderSunglasses = () => new Promise(myExecutor);
// const orderPromise = orderSunglasses();
// console.log(orderPromise);











