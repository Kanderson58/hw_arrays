var favoriteFood = ["raspberries", "potstickers", "tamales", "garlic bread"];
var petsAge = [1, 6, 13, 3];
var boolean = [true, false, true, false];

// Using .pop will remove the last string in this array and it will output the array 
// minus the final string, "garlic bread".
favoriteFood.pop();
console.log(favoriteFood);

// Using .push will add a number, in this case 5, to the end of the array.
petsAge.push(5);
console.log(petsAge);

// Using .shift will remove the first boolean from the array, leaving false in the 0 spot,
// true in the 1 spot, and false in the 2 spot.
boolean.shift();
console.log(boolean);

// Index positions start from 0 as the first place and go up from there.  It is a way to refer
// to where an item is within an array.
var petsAge = [1, 6, 13, 3];
// In this array, my cat Rosie's age, 13, has the index position 2.