//Question 1 all parts
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
/*a.Programmatically subtract the value of the first element in the array from the value in the last
 element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0]
is not allowed). Print the result to the console.*/
let last = ages[ages.length - 1];
let first = ages[0];
console.log(last - first);

/*b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different 
lengths). */
ages.push(10);
last = ages[ages.length - 1];
first = ages[0];
console.log(last - first);

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let sum = ages[0];
for(let i = 1; i < ages.length; i++) {
    sum = ages[i] + sum;
}
console.log(sum/ages.length);

//Question 2 
let names = ['Sam', 'Colby', 'Tim', 'Sally', 'Buck', 'Bob',]
//a.Use a loop to iterate through the array and calculate the average number of letters per name.
// Print the result to the console.
var total = 0;
for(var i = 0; i < 6; i++) {
    total += names[i].length;
    var average = total/names.length;
}
console.log(average);

//Part 2 of question 2 
//b.Use a loop to iterate through the array again and concatenate all the names together, 
//separated by spaces, and print the result to the console.
var answer = ' ';
for(i = 0; i < 6; i++){
    answer = answer + ' ' + names[i];
}
console.log(answer);

//Question 3 
//accessing last element 
var lastElement = names[names.length-1];
console.log(lastElement);

//Question 4 
//accessing first element
var firstElement = names [0];
console.log(firstElement);

//Question 5
/*Create a new array called nameLengths. Write a loop to iterate over the previously created names 
array and add the length of each name to the nameLengths array.*/
var nameLengths = [5, 6, 8, ];
for(var i = 0; i < names; i++) {
    names[i].length;
}names.push(...nameLengths);
console.log(names);

/*6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements
 in the array. Print the result to the console.*/
 let sumName = nameLengths[0];
 for(let i = 1; i < nameLengths.length; i++) {
     sum = nameLengths[i] + sum;
 }
 console.log(sum/nameLengths.length);
 

/* 7.Write a function that takes two parameters, word and n, as arguments and returns the word 
concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the 
function to return ‘HelloHelloHello’). */
function wordRepeat(word,n) {
    return word.repeat(n);
}console.log(wordRepeat("Hello",3));


/* 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name
(the full name should be the first and the last name separated by a space). */
fullName('Hannah', 'Myers',);
function fullName(firstName, lastName){
    var fullName = firstName + ' ' + lastName;
    console.log(fullName);
    return true;
}

/* 9.Write a function that takes an array of numbers and returns true if the sum of all the numbers 
in the array is greater than 100. */
var listOfNumbers = [62, 16, 26, 9, 27,];
function arrayofNums(listOfNumbers){ for(let i = 0; i < listOfNumbers.length; i++){
    sum += listOfNumbers[i]
    if(listOfNumbers > 100){
    console.log(true);}
}
}
/* 10.Write a function that takes an array of numbers and returns the average of all the elements 
(5) in the array.*/
let = listOfNumbers;
    for(var i = 0; i < listOfNumbers; i++){
        sum += parseInt(listOfNumbers[i, 5]);
    }
   var avg = sum/listOfNumbers.length;
   console.log(avg)

   /* 11.	Write a function that takes two arrays of numbers and returns true if the average of the
    elements in the first array is greater than the average of the elements in the second array.*/
var arr1 = [6, 8, 1, 2, 4,];
var arr2 = [7, 9, 6, 3,];

function twoArrays (midArr1, midArr2){
    for(var i = 0; i < arr1; i++){
    sum += parseInt(arr1[i, 5]);
} var midArr1 = sum/arr1.length;

for(var i = 0; i < arr2; i++){
    sum += parseInt(arr2[i, 4]);
}var midArr2 = sum/ arr2.length;

if (midArr1 > midArr2)
 twoArrays();}

/*12.	Write a function called willBuyDrink that takes a Boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot 
outside and if moneyInPocket is greater than 10.50.*/
var isHotOutside = true;
var moneyInPocket = 0.0;

function willBuyDrink (isHotOutside, moneyInPocket){
    while(isHotOutside){
        if(isHotOutside && moneyInPocket > 10.50){
            return true;
        } else { moneyInPocket += 1.0; 
        }
    }     
}

/* 13.	Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it. */
fluffyCats('Siberian', 'Ragdoll',);
function fluffyCats(cuteKitty1, cuteKitty2){
    var fluffyCats = cuteKitty1 + ' ' + cuteKitty2;
    console.log(fluffyCats);
    return true;
}
//The function above lists two fluffy cat breeds, if both functions are 
//true it will be true and print both cat breeds