// Assignment: JavaScript Hoisting
// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); 
// example = "I'm the example!"; //Will bring up as undefined

// console.log(example); //Will bring up a reference error.
// let example = "I'm the example!";    

// #1
// console.log(hello)
// var hello = 'World'                               
// Will log as undefined 

//#2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// the variable went from "Global scope to local scope. It will log magnet when called.
//this is also because variables and functions get pushed to the top --> needle has been declared and then it is called. 

//#3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//This fuction is not being called so only "Super cool" will print

// //#4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
//This will first print chicken, then it will print "half-chicken" --> then change it to "gone"

//#5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// there is no "var = 'food' being declared at any point, this will provide a reference error. Function I am still unclear"
//CORRECTION --> This actually will not run because of the function mean not being declared properly 
// a variable cannot be a function. 

//#6
// console.log(genre);//will trow undfined first.
// var genre = "disco"; 
// rewind(); //will ruin the function / then print 'rock' and "r&b" 
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre); //then it will print "disco"

// //#7
// dojo = "san jose";
// console.log(dojo); //will log "san jose"
// learn(); //will run accordingly 
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo); // will print "san jose"


//#8

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// It will first return a dictionary {} with a 50, and a true statement const dojo = { name: 'Chicago', hiring: true};
// Second one will not run because of it's type wich has been assign a type as well as attributes --- ask people about this 6/1/2018


