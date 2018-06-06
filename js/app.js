'use strict';

//  conditional logic
//  if/else
var wrongResponce = "Youve entered something other than 'yes' or 'no'";
var eatsBread = prompt("Do you like bread? (only answer with 'yes' or 'no')").toLowerCase();

//  Question 1 bread
if (eatsBread === 'yes') {
    console.log("Bread answer: " + eatsBread);
    alert("YAY");
} else if (eatsBread === 'no') {
    console.log("Bread answer: " + eatsBread);
    alert('Lame');
} else {
    console.log("Bread answer: " + eatsBread);
    alert(wrongResponce);
}

//  Question 2 Pizza
var eatsPizza = prompt("Do you like Pizza? (only answer with 'yes' or 'no')").toLowerCase();

if (eatsPizza === 'yes') {
    console.log("Pizza answer: " + eatsPizza);
    alert("PIZZA");
} else if (eatsPizza === 'no'){
    console.log("Pizza answer: " + eatsPizza);
    alert('WHAT?');
} else {
    console.log("Bread answer: " + eatsPizza);
    alert(wrongResponce);
}

//  Question 3 Dinner
var eatsDinner = prompt("Is dinner your favorite meal? (only answer with 'yes' or 'no')").toLowerCase();

if (eatsDinner === 'yes') {
    console.log("Dinner answer: " + eatsDinner);
    alert("Lets eat dinner!");
} else if (eatsDinner === 'no'){
    console.log("Dinner answer: " + eatsDinner);
    alert('Lets make breakfast!');
} else {
    console.log("Bread answer: " + eatsDinner);
    alert(wrongResponce);
}


//  Question 4 Hungry
var eatsHungry = prompt("Are you hungry now? (only answer with 'yes' or 'no')").toLowerCase();

if (eatsHungry === 'yes') {
    console.log("Hungry answer: " + eatsHungry);
    alert("Lets get some food!");
} else if (eatsHungry === 'no'){
    console.log("Hungry answer: " + eatsHungry);
    alert('Lets get some food later!');
} else {
    console.log("Bread answer: " + eatsHungry);
    alert(wrongResponce);
}


//  Question 5 Sleep
var eatsSleep = prompt("Do you get tired after you eat a big meal? (only answer with 'yes' or 'no')").toLowerCase();

if (eatsSleep === 'yes') {
    console.log("Sleeps answer: " + eatsSleep);
    alert("Time to digest!");
} else if (eatsSleep === 'no'){
    console.log("Sleeps answer: " + eatsSleep);
    alert('Time for a jog!');
} else {
    console.log("Bread answer: " + eatsSleep);
    alert(wrongResponce);
}