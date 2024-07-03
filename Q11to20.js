"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 11
let names = ['Anoosha', 'Arshia', 'Rubal', 'Fatima'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("\n");
//Question 12
let msg = "are u coming today?";
console.log(msg, names[0]);
console.log(msg, names[1]);
console.log(msg, names[2]);
console.log(msg, names[3]);
console.log("\n");
//Question 13
let cars = ['GTR R34', 'SUPRA mk4', 'porsche 911'];
console.log(`I would like to have a ${cars[0]} and ${cars[2]}`);
console.log(`I want a ${cars[1]}`);
console.log(`I'll have a ${cars[1]} In sha allah`);
console.log("\n");
//Quesytion 14
let guest = ['Anoosha', 'Arshia', 'Rubal'];
let invitation = "It's been a long time since we all met, so I'm inviting you for dinner at my house with your family! I'd love for you to join us for an evening of good food and catching up. We can share stories and make some new memories together. Please let me know if you're free and we can finalize the details. Looking forward to hearing back from you!";
console.log(`Aslam walaikum ${invitation}`);
console.log("\n");
//Question 15
console.log(guest[2], "can't attend the dinner");
guest[2] = 'Fatima';
let newguest = guest[2];
console.log(`${newguest}, ${invitation}`);
console.log("\n");
//Question 16
let message = "I've found a bigger dinner table";
guest.forEach(guests => {
    console.log("Hey there!", guests, message);
});
guest.unshift("Shafaq");
guest.splice(2, 0, "Ayesha");
guest.push("Maham");
guest.forEach(Guest => {
    console.log(`Hey ${Guest}! You are cordially invited to join us for an evening of dinner and merriment!`);
});
console.log("\n");
//Question 17
console.log("Unfortunately, I can only invite two guests to dinner. Hope you understand!");
while (guest.length > 2) {
    let remove_guest = guest.pop();
    console.log(`Dear ${remove_guest}, Please accept my apologies, but I am unable to invite you to dinner Sincerely,Asheeqa Ali`);
}
console.log(`Dear ${guest.join(" and ")}, you are still invited to dinner! I'm looking forward to seeing you.`);
guest.pop();
guest.shift();
console.log(guest);
console.log("\n");
//Question 18
let places = ["Turkey", "Makkah", "Madina", "Japan", "Maldives"];
console.log("Original order : ", places);
console.log("Alphabetical order", [...places].sort());
console.log("Original order : ", places);
console.log("Reversed alphabetical order", [...places].sort().reverse());
console.log("Original order", places);
places.reverse();
console.log("Reversed order : ", places);
places.reverse();
console.log("Original order : ", places);
places.sort();
console.log("Alphabetical order : ", places);
places.reverse();
console.log("Reversed alphabetical order : ", places);
console.log("\n");
//Question 19
let invited_guest = ["Shafaq", "Anoosha"];
console.log(`I'm inviting ${invited_guest.length} guests to dinner.`);
console.log("\n");
//Question 20
let anime_husbando = ["Toji", "Zoro", "Sanji", "Eren", "Nanami"];
anime_husbando.forEach(ah => {
    console.log(`Husband material anime character : ${ah}`); //I want themmmmmmm I'm in deluluuuuuuuuu
});
console.log("\n");
