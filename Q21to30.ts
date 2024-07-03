//Question 21
let Anime : {
    Author: string;
    Tittle: string;
    year_published: number
  } ={
    Author : "Masashi Kishimoto",
    Tittle : "Naruto",
    year_published : 2002
  };
  
  console.log(`Anime Info: ${Anime.Tittle} by ${Anime.Author} in ${Anime.year_published}`);

  console.log("\n");
  
//Question 22
  let colors = ["red","blue","green"];
  // Intentional error: Accessing an index that doesn't exist
  console.log(colors[5]); // Output: undefine
  
  //Correcting error
  console.log(colors[2]); // Output: blue

  console.log("\n");
  
//Question 23
let car = 'subaru'

console.log("Is car == 'subaru'?, I predict true." );
console.log(car == 'subaru');

console.log("Is car != 'subaru'?, I predict false.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'?, I predict true.");
console.log(car === 'subaru');

console.log("Is car !== 'subaru'?, I predict false.");
console.log(car !== 'subaru');

console.log("Is car < 'toyota'?, I predict true.");
console.log(car < 'toyota');

console.log("Is car > 'toyota'?, I predict false");
console.log(car > 'toyota');

console.log("Is car <= 'subaru'?, I predict true.");
console.log(car <= 'subaru');

console.log("Is car >= 'subaru'?, I predict true.");
console.log(car >= 'subaru');

console.log("Is car == 'toyota' or 'subaru'?, I predict true.");
console.log(car == 'toyota' || car == 'subaru');

console.log("Is car == 'SUBARU'?, I predict false.");
console.log(car == 'SUBARU'); 

console.log("\n");

//Question 24
//Equality with strings
console.log("Testing equality with string: ");
console.log("apple" == "apple");
console.log("apple".toLowerCase()=="Apple".toUpperCase());

//Using lower case function
console.log("Testing with Lower case function");
console.log("apple" == "Apple".toLowerCase());

//Numerical Test
console.log("Testing with Numericals");
console.log(11 > 5);
console.log(66 < 33);

//"and" and "or" operators
console.log("Testing with 'and' and 'or' operator ");
console.log(true && false);
console.log(true || false);

//whether an item is in array
console.log("Testing whether an item is in array");
let fruits = ["apple", "mango", "banana"];
console.log("is 'mango' in fruits?");
console.log(fruits.includes("mango"));

//whether an iterm isn't in array
console.log("Testing whether an item isn't in array");
console.log("is liche in fruits?");
console.log(fruits.includes("liche"));

console.log("\n");

//Question 25
let alien = "green"
if (alien == "green") {
  console.log("You just earned 5 points");
}

let alien_color = "red"
if (alien_color == "green") {
    console.log("You got nothing");
}

console.log("\n");

//Question 26
let Alien = "green"
if (Alien == "green") {
  console.log("You just earned 5 points");
}else{
  console.log("You earned 10 points");
}

console.log("\n");

//Question 27
//Green alien version
let color_of_alien = "green"
if (color_of_alien == "green") {
  console.log("You just earned 5 points.");
}else if (color_of_alien == "yellow") {
  console.log("You just earned 10 points.");
}else if (color_of_alien == "red") {
  console.log("You just earned 15 points.");
}

console.log("\n");


//Yellow alien version
let alienColor = "yellow"
if (alienColor == "green") {
  console.log("You just earned 5 points.");
}else if (alienColor == "yellow") {
  console.log("You just earned 10 points.");
}else if (alienColor == "red") {
  console.log("You just earned 15 points.");
}

console.log("\n");


//Red alien version
let AlienColor = "red"
if (AlienColor == "green") {
  console.log("You just earned 5 points.");
}else if (AlienColor == "yellow") {
  console.log("You just earned 10 points.");
}else if (AlienColor == "red") {
  console.log("You just earned 15 points.");
}

console.log("\n");

//Question 28
let age = 25

if (age < 2) {
  console.log("The person is a Baby.");
}else if (age < 4) {
  console.log("The person is toddler.");
}else if (age < 13) {
  console.log("The person is Kid.");
}else if (age < 20) {
  console.log("The person is teenager.");
}else if (age < 65) {
  console.log("The person is adult.");
}else{
  console.log("The person is elder.");
}

console.log("\n");

//Question 29
let fav_fruits = ["apple", "peach", "orange" ]
 if (fav_fruits.includes("peach")) {
  console.log("You really like peach");
 }if (fav_fruits.includes("apple")) {
  console.log("You really like apple");
 }if (fav_fruits.includes("orange")) {
  console.log("You really like orange");
 }

 console.log("\n");
 
// Question 30
let usernames = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
  if (username == "admin") {
    console.log("Hello admin, would u like see a status report?");
  }else{
    console.log(`Hello ${username}, thank u for logging in`);
  }
})

