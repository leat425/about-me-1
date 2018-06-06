'use strict';

//  conditional logic
//  if/else

var eatsBread = prompt("Do you like bread? (only answer with 'yes' or 'no')").toLowerCase();

//  Question 1 bread
if(eatsBread === 'yes'){
    console.log("Bread answer: " +eatsBread)
    alert("YAY");
} else{
    console.log("Bread answer: " +eatsBread)
    alert('Lame');
}

//  Question 2 Pizza
var eatsPizza = prompt("Do you like Pizza? (only answer with 'yes' or 'no')").toLowerCase();

if(eatsPizza === 'yes'){
    console.log("Pizza answer: " +eatsPizza)
    alert("PIZZA");
} else{
    console.log("Pizza answer: " +eatsPizza)
    alert('WHAT?');
}

//  Question 3 Dinner
var eatsDinner = prompt("Is dinner your favorite meal? (only answer with 'yes' or 'no')").toLowerCase();

if(eatsDinner === 'yes'){
    console.log("Dinner answer: " +eatsDinner)
    alert("Lets eat dinner!");
} else{
    console.log("Dinner answer: " +eatsDinner)
    alert('Lets make breakfast!');
}

//  Question 4 Hungry
var eatsHungry = prompt("Are you hungry now? (only answer with 'yes' or 'no')").toLowerCase();

if(eatsHungry === 'yes'){
    console.log("Hungry answer: " +eatsHungry)
    alert("Lets get some food!");
} else{
    console.log("Hungry answer: " +eatsHungry)
    alert('Lets get some food later!');
}

//  Question 5 Sleep
var eatsSleep = prompt("Do you get tired after you eat a big meal? (only answer with 'yes' or 'no')").toLowerCase();

if(eatsSleep === 'yes'){
    console.log("Sleeps answer: " +eatsSleep)
    alert("Time to digest!");
} else{
    console.log("Sleeps answer: " +eatsSleep)
    alert('Time for a jog!');
}