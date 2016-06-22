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

/***********
DOM Access
***********/


/****************
Viewing Objects
****************/
console.log("DOM Access")

// Get element by ID
var myElement = document.getElementById("mainHeader");

console.log("Selected Element:", myElement);
console.log("NodeType:", myElement.nodeType);
console.log("NodeName:", myElement.nodeName);
console.log("InnerHTML:", myElement.innerHTML);
console.log("Child nodes:", myElement.childNodes);


// Get ALL element by Tag name
var myElements = document.getElementsByTagName("li");

console.log(myElements);

// Chain variables together to specify elements/tags
var myElement = document.getElementById("myList");
var myListItems = myElement.getElementsByTagName("li");

console.log("Chained list items:", myListItems);



/***************
Editing Objects
****************/

// Create handle to object
var selectedParagraph = document.getElementById("myParagraph");

console.log(selectedParagraph);

// Set attribute
selectedParagraph.setAttribute("align", "center");

// Disable a button
var selectedButton = document.getElementById("myButton");

selectedButton.setAttribute("disabled", "disabled");


/*****************
Creating Objects
*****************/

// Grab handle on parent node/element - if needed
var myElement = document.getElementById("myOtherList");

// Create the element
var myNewElement = document.createElement("li");

// Add new [child] element to document and assign inner HTML
myElement.appendChild(myNewElement);
myNewElement.innerHTML = "New list item created (inner HTML)"  //not best practice

// Better practice to append a text node/element
var myText = document.createTextNode("New text node created (text node)");
myNewElement.appendChild(myText);

// Insert element inbetween others
var secondListItem = myElement.getElementsByTagName("li")[1];
myElement.insertBefore(myNewElement, secondListItem);


/***************************
Events and Event Listeners
****************************/

console.log("Events and Event Listeners")

// Method 1
// directly in HTML file: <button onclick="alert('Hello World')">text</button>


// Method 2 - Create an anonymous function to be called
var myElement = document.getElementById("mainHeader")
myElement.onclick = function() {
	alert("hello, you just clicked my header!");
};  //don't forget semicolon

// Method 3 - add an event listener
function myFunction( ) {
	alert("Event Listener: you just clicked your mouse!");
}

// Does not work in IE < 9; use JQuery library instead
//document.addEventListener('click', myFunction, false);


// Good practice to use the window.onload method to be sure that all content is loaded

function prepareEventHandlers() {
	var myImage = document.getElementById("coolImage");
	myImage.onclick = function() {
		alert("You just clicked the cool image!");
	}
}

// Be sure page is loaded before parsing function.
window.onload = function () {
	prepareEventHandlers();
}


// Working with forms - onblur/onfocus
var myInput = document.getElementById("myInput");
myInput.onblur = function () {
	if ( myInput.value == "") {
		alert("using onblur: you didn't type anything in!")
	}
};


/********************
Working with Timers
********************/

// Set one time delay

function delayedAlert() {
	alert("This is a 2 sec delayed alert using setTimeout");
}

// Set timeout in milliseconds
setTimeout(delayedAlert, 2000);


// Set an interval delay

var myImage = document.getElementById("coolImage");

var imageArray = ["../images/image1.jpg", "../images/image2.png",
				  "../images/image3.jpg", "../images/image4.jpg"];
				  
var imageIndex = 0;


function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also milliseconds
setInterval(changeImage, 5000);

// Use clearTimeout and clearInterval to stop the timer


// Call mapped funcitons
console.log(player1.logDetails());
console.log(player2.logDetails());


/*********
Forms
*********/

console.log("Working with Forms")

// Works when you give an ID value to form tag
console.log("print whole form:", document.forms.myForm);

// Works when you use the 'name' attribute of the form fields
console.log("print the specific form element:", document.forms.myForm.email);

// Use getElementById to grab value (you can also use the above methods as well!)
console.log("get form element by id (blank if no value):", document.getElementById("email").value);

// event properties
// onblur, onfocus, onchange, onkeypress, onkeydown, onkeypress, onsubmit, checked



/*******************
Working with Styles
*******************/

// Can use normal CSS properties after 'style'
myParagraph.style.color = "red";

// dashes become camelCase background-color == backgroundColor
myParagraph.style.backgroundColor = "yellow";

// Applying existing CSS classes to elements
document.getElementById("myParagraph").className = "myCSSClass";

document.getElementById("movingBox").style.height= "100px";
document.getElementById("movingBox").style.width= "100px";
document.getElementById("movingBox").style.background= "black";


/*************************
Code Style Best Practices
**************************/

// Use camelCase w/ first letter lowercase (ex) variables, functions & methods
var score;
var highScore;

// Objects use uppercase first letter
Math, Date

// Define functions before you call them

// Always use semicolons

// Always use var

// Always use code blocks {}


/******************
Code minification
******************/

// Removes comments, shortens variable names, removes whitespace, lessens page load time

// Popular tools:

    // JSMin, YUI Compressor, Google Closure Compiler


/*********************
JavaScript Libraries
*********************/

// General Purpose Library Examples:
    // Google Closure
    // MooTools
    // Yahoo Dev Network
    // JQuery
	
// More Secific Libraries available as well


/***************
JQuery Examples
***************/

document.getElementById("movingBox").style.background = "blue";


// Hide all list items in 10 seconds
jQuery("li").hide(10000);

// Use jQuery alias - '$'
$("h2").click(function () {
	$(this).text("You clicked me!");
});


// Use Page load events to avoid overwriting in natural JS
$(document).ready(function () {
	console.log("the page has fully loaded");
});


/*****************
Feature Detection
*****************/

if ( document.getElementByClassName ) {
    // it exists, we can use it.
}  else {
    // no browser support, so do...
}


/**********
Modernizr
**********/

// When used can provide a nice boolean lookup of HTML5 and CSS3 features
// telling whether or not the client's browser can support or not.

// Simple call:
// if ( Modernizr.video ) {
    // yes, it exists, use HTML5 video
//} else {
    // replace it with a different feature
//}


/********************
Poor JS to watch for
********************/

// document.write("some text");  // use innerhtml or manipulate the text node


// Browser sniffers

// eval

// pseudo-protocols
//<a href= "javascript:someFunction()">This</a>


/************
AJAX Example
************/
// 1 Create the request (object)
// 2 Handle any response (object)

console.log("AJAX Example Start");

// Create Request
var myRequest;

// feature check
if ( window.XMLHttpRequest ) {  // firefox, Safari, etc...Chrome?
    myRequest = new XMLHttpRequest();
} else if ( window.ActiveXObject ) {  // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

// Create event handeler for our request to call back
myRequest.onreadystatechange = function() {
    console.log("We were called!");
    console.log(myRequest.readyState);
      if ( myRequest.readyState === 4) {
        var p = document.createElement("p");
        var t = document.createTextNode(myRequest.responseText);
        p.appendChild(t);
        document.getElementById("mainContent").appendChild(p);
    }
};

// Configure and send
myRequest.open('GET', 'data.txt', true);  // GET request, to file, true for ajax
// Include parameters if necessary
myRequest.send(null);


// Subsequent code will continue running; not waiting for response to return...























