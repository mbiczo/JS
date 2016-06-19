// This is a basic comment
// This js file will be used to show various examples


// First words
//alert("Hello, world!");

// Assign variables; CANNOT START WITH INT
var a = 0;

// Output to console for inspection
console.log("var a:", a);

/**************
Control Flow
***************/

// Basic conditional code - can be nested, however flat may be better.
if ( a > 0 ) {
	// code goes here.
	console.log("a is greater than 0!");
} else if  ( a == 0 ) {
	// otherwise if...
	console.log("a is equal to 0.");
} else {
	// lastly do this.
	console.log("a must be less than 0.");
}

// Be sure to understand '==' vs '===' and possibly use the later.

/*
Other comparrisons:

'&&' == and
'||' == or
*/

//Ternary operator example;
var playerOne = 500;
var playerTwo = 600;

// If p1 is greater than p2 then p1 else p2
var highScore = ( playerOne > playerTwo ) ? playerOne : playerTwo;


/*******************************
 Loops (While, Do While, For)
*******************************/
console.log("***While Loop Test***");

var n = 1;

console.log("var n:", n);

// Basic While Loop
while ( n < 10 ) {
	console.log(n);
	n++;
}

// Basic Do While Loop
console.log("Do While Loop Test");

var n = 99

console.log("var n:", n);

do {
	console.log(n);  //first block will ALWAYS run.
	n++;
} while ( n < 10 );


// Basic For Loop
console.log("***For Loop Test***")

for ( var i = 1; i < 10; i++ ) {
	console.log(i);
}


// For Loop with break
console.log("***For Loop break example at 7***")

for ( var i = 1; i < 500; i++ ) {
	console.log(i);
	//do more stuff
	if ( i == 7 ) {
		break;
	}
	//otherwise do even more stuff
}


// For Loop with continue
console.log("***For Loop continue example.***")

for ( var i = 1; i < 20; i++ ) {
	console.log(i);
	if ( i < 10 ) {
		continue;  //continue back to the top of the loop
	}
	i++
}


/************
Functions
************/

console.log("***myFunction Test***")

function myFunction ( x, y ) {
	var myVar = x * y;
	
	// We can return values
	return myVar;
}

// Assign function result to a variable
x = myFunction(100, 2);
console.log(x);



/***********
Data Types
***********/

console.log("***Data Types***")


/*******
Arrays
*******/

console.log("***Arrays***")

// Create new empty array
var myArray = [10, 20, 30, 40, 50];
var myArray2 = [10, 20, "hello", 40, 50];  //can hold different data types

console.log("array:", myArray);
console.log("length:", myArray.length);
console.log("reverse:", myArray.reverse());
console.log("join:", myArray.join());  //joints values as one string.

// Grab all Elements by tag; returns an array
var myArrayOfTags = document.getElementsByTagName("h1");
console.log(myArrayOfTags)


/********
Numbers
********/
console.log("***Numbers***")

// All JavaScripts numbers are 64-bit floating point numbers.


// Converting to Number
//var foo = "55";
var foo = "abc";

var myNumber = Number(foo);  //Try to make it a numbers

if ( isNaN(myNumber) ) {
	console.log("It's not a number!");
	console.log("myNumber", myNumber);
}


// Rounding using Math
 var x = 200.6;
 console.log(x);
 var y = Math.round(x);
 console.log("Rounded:", y)
 

var a = 200, b = 10000, c = 4;
var numList = [1,2,3,99];

console.log(a);

var biggest = Math.max(a, b, c);  //individual numbers

console.log("max:", biggest);

var smallest = Math.min.apply(Math, numList);  //inspect a list

console.log("min:", smallest);



/********
Strings
********/

console.log("***Strings***");

var phrase = "This is my string phrase.";

console.log(phrase);

// Length of String
console.log("string length:", phrase.length);

// Convert to upper/lower case
console.log("to upper:", phrase.toUpperCase());

// Split on char; returns array
var words = phrase.split(" ");

console.log(words, phrase);

// Find index of substring
var position = phrase.indexOf("my");  //if does not exist; returns -1

console.log("index of 'my':", position);

// Slice substring
var strSlice = phrase.slice(6, 11); 

console.log(strSlice)


/*****
Dates
*****/

console.log("***Dates***")

var today = new Date();

// Getting various date attributes
console.log(today);
console.log("Month:", today.getMonth());  // 0 == Jan
console.log("Year:", today.getFullYear());  //YYYY
console.log("Day of Month:", today.getDate());  //1-31
console.log("Day of Week:", today.getDay());  //0-6; 0 == Sunday
console.log("Time:", today.getTime());  //milliseconds since 1/1/1970

// Setting various date attributes
today.setFullYear(2020);
today.setMonth(11);
today.setDate(25);

console.log("New Set Date:", today);

// Comparing 2 dates
var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);

// Incorrect way
if ( date1 == date2 ) {
	console.log("They match!");
} else {
	console.log("They don't match.");
}


// Correct way
if ( date1.getTime() == date2.getTime() ) {
	console.log("They match!");
} else {
	console.log("They don't match.")
}


/********
Objects
********/


// Create new object using object
var player1 = new Object();

// Set variable properties
player1.name = "Fred";
player1.score = 23;
player1.rank = 1;

console.log("Player:", player1);

var player2 = { name: "Susan", score: 10, rank: 3};
var player3 = { name: "James", score: 1, rank: 2};



function playerDetails() {
	// display information about each player
	console.log(this.name + " has a rank of: " +  //uses 'this' to refer to itself
	this.rank + " and a score of " + this.score);
}

// Map a method variable to a function
player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

// Call mapped funcitons
console.log(player1.logDetails());
console.log(player2.logDetails());












