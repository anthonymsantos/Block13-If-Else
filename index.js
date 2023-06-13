//IS TRUTHY
//Instantiate Values
const myString = "I am a string";
const myBoolean = false;
const isNull = null;
const isUndefined = undefined;
const myNum = 0;
const emptyString = '';

//If the value is truthy, print true;
if (myString == "I am a string") {
    console.log(true);
} else {
    console.log(false);
}

//If the value is falsy, print "The boolean value false is falsy"
if (myBoolean == false) {
   console.log('"The boolean value false is falsy"');
}

//If the value is falsy, print "The null value is falsy"; 
if (isNull == null) {
    console.log('"The null value is falsy"');
 }

//If the value is falsy, print "undefined is falsy"
if (isUndefined == undefined) {
    console.log('"undefined is falsy"');
}

//If the value is falsy, print "The number 0 is falsy (the only falsy number)"
if (myNum == 0) {
    console.log('"The number 0 is falsy (the only falsy number)"');
}

//If the value is falsy, print "The empty string is falsy (the only falsy string)"
if (emptyString == '') {
    console.log('"The empty string is falsy (the only falsy string)"');
}

//NUMBER LINE (change num1 and num2 values to test)
const num1 = 500;
const num2 = -700;
let sum = num1+num2;

//If sum > 100, print sum is greater than 100
if (sum > 100) {
    console.log(sum + ' is greater than 100');
}

//If sum > 0, print sum is greater than 0
else if (sum > 0) {
    console.log(sum + ' is greater than 0');
}

//If sum = 0, print sum is equal to 0
else if (sum == 0) {
    console.log(sum + ' is equal to 0');
}

//If sum < 0 print sum is a negative number
else if (sum < 0) {
    console.log(sum + ' is a negative number');
}

//GREAT THAN OR EQUAL TO 5 (change num3 and num4 values to test)
const num3 = 5;
const num4 = 6;

//Print true if BOTH num3 and num4 are greater than 5
if (num3 >= 5 && num4 >= 5) {
    console.log(true);
} else {
    console.log(false);
}

//PAIR AND COMPARE (change param values to test)
const param1A = "cat";
const param1B = "cat";
const param2A = 6;
const param2B = "6";

//If param1A and param1B = true or param2A = param2B = true, print true, else print flase
if (param1A === param1B || param2A === param2B) {
    console.log(true);
} else {
    console.log(false);
}