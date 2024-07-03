"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 31
let user_names = [];
if (user_names.length === 0) {
    console.log("we need to find some user!");
}
else {
    user_names.forEach(user_name => {
        if (user_name == "admin") {
            console.log("Hello admin, would u like see a status report?");
        }
        else {
            console.log(`Hello ${user_name}, thank u for logging in`);
        }
    });
}
console.log("\n");
//Question 32
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is availabe.`);
    }
});
console.log("\n");
//Question 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(num => {
    let suffix = "th";
    if (num === 1) {
        suffix = "st";
    }
    else if (num === 2) {
        suffix = "nd";
    }
    else if (num === 3) {
        suffix = "rd";
    }
    console.log(`${num}${suffix}`);
});
console.log("\n");
//Question 34
let piazza_flav = ["Fajita", "Cheese", "Pepperoni"];
piazza_flav.forEach(pizza_flavour => {
    console.log(`I like ${pizza_flavour} pizza`);
});
console.log("I'm crazy about pizza! It's the cheesiest, most delicious, and amazing food in the universe! "); //nahhhhhhhhhhh I'm not that much obsessed with pizza
console.log("If I had a slice for every time I mentioned pizza, I'd have a whole pizzeria by now!");
console.log("My love for pizza is truly infinite!"); //nooooo it's not trueeeeee
console.log("\n");
//Question 35
let animals = ["Lion", "Snake", "Cat"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great.`);
});
console.log("All three are meat-eaters.");
console.log("Any of these animals would make a great pet.");
console.log("\n");
//Question 36
function make_shirt(size, message) {
    console.log(`Making a ${size} size t-shirt with message "${message}" printed on it.`);
}
make_shirt("medium", "Anime is life");
console.log("\n");
//Question 37
function makeShirts(size = "large", message = "I love typescript.") {
    console.log(`Making a ${size} size t-shirt with message "${message}" printed on it.`);
}
makeShirts();
function make_shirts(size = "medium", message = "I love typescript.") {
    console.log(`Making a ${size} size t-shirt with message "${message}" printed on it.`);
}
make_shirts("medium", "Money can buy happiness");
make_shirts();
console.log("\n");
//Question 38
function describe_city(cities, country = "Pakistan") {
    console.log(`${cities} is in ${country}`);
}
describe_city("Karachi");
describe_city("lahore");
describe_city("Tokyo", "Japan");
console.log("\n");
//Question 39
function cities_countries(city, country) {
    return `${city}, ${country}`;
}
console.log(cities_countries("Tokyo", "Japan"));
console.log(cities_countries("Karachi", "Pakistan"));
console.log(cities_countries("San fransisco", "America"));
console.log("\n");
//Question 40
function make_album(artist, tittle, tracks) {
    let album = { artist, tittle };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Arman Malik", "Jab tak"));
console.log(make_album("Tom Odell", "Another love"));
console.log(make_album("Ruth B.", "Dandelions", 12));
