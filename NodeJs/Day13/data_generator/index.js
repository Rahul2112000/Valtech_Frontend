const fs = require("fs");
const path = require("path");

let firstnames = [
  "Bruce",
  "Tony",
  "Peter",
  "Steve",
  "Mat",
  "Bill",
  "Wade",
  "Scott",
  "Kit",
  "Clark",
  "Jessica",
  "Natasha",
];
let lastnames = [
  "Wayne",
  "Stark",
  "Parker",
  "Rogers",
  "Maddoc",
  "Gates",
  "Wilson",
  "Scott",
  "Walker",
  "Kent",
  "Jones",
  "Ramanof",
];
let titles = [
  "Batman",
  "Ironman",
  "Spiderman",
  "Captain America",
  "Dare Devil",
  "Microsoft",
  "Dead Pool",
  "Antman",
  "Phantom",
  "Superman",
  "Investigator",
  "Black Widow",
];
let cities = [
  "Bengalore",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Jamkhambhadia",
  "Rampuri",
  "Mysore",
  "Diu Daman",
  "Shimla",
  "Manali",
  "Ooty",
  "Nainital",
];

const randomHero = (valtocheck) =>
  valtocheck[Math.floor(Math.random() * valtocheck.length)];

const randomPower = () => Math.floor(Math.random() * 10);

const generateHeroes = () => {
  let heroes = [];
  for (let i = 0; i < 500; i++) {
    heroes.push({
      firstname: randomHero(firstnames),
      lastname: randomHero(lastnames),
      title: randomHero(titles),
      city: randomHero(cities),
      power: randomPower(),
    });
  }
  return heroes;
};

const heroes = generateHeroes();

const filePath = path.join(__dirname, "data.json");
const data = JSON.stringify(heroes, null, 2);

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data written to file successfully!");
  }
});
