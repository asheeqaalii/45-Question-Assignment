"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 41
let magicians = ["Paul", "Harry", "Shin"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
console.log("\n");
//Question 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
console.log("\n");
//Question 43
let magicianss = ["Paul", "Shin", "Herry"];
function makeGreat(magicianss) {
    let great_magician = [];
    magicianss.forEach(megician => {
        great_magician.push(`${megician} the Great`);
    });
    return great_magician;
}
let great_magician = makeGreat(magicianss.slice());
console.log("Original magicians");
show_magicians(magicianss);
console.log("Great magicians");
show_magicians(great_magician);
console.log("\n");
//Question 44
function make_sandwich(...item) {
    console.log(`Making a sanwich with ${item.join(', ')}.`);
}
make_sandwich("chicken", "cheese");
make_sandwich("cucumber", "tomato", "lettuce");
make_sandwich("avocado", "olive", "mushroom", "ketchup");
console.log("\n");
//Question 45 
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Supra mk4", ["color", "white"], ["Hoursepower", "320hp"]));
