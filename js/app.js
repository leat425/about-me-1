'use strict';

// 1. Test: use console.log 
// 2. Convert Elements: Use un/ordered lists for elements on HTML
// 3. UX: consider the UX for the game / Can write a 'User Story'


// 4. Interesting Content: Use pertinent content.
// 0. Useful Features: interesting features that create appeal for content.

// 6. Add a top 10 about list. 

// 7. CSS: style the page tastefully
// 8. Number Question: add a question that requires a number input
//     a. give feed back about the number
//     b. use counter to limit guesses
// 9. Array Question: add a question that checks an array for a correct answer.
//     a. limit number of guesses (6)
//     b. provide feedback on guesses
// 10. Tally: calculate and display how many questions were answered correctly.



var wrongResponce = 'Youve entered something other than "yes" or "no"';
var eatsBread = prompt('Do you like bread? (only answer with "yes" or "no")').toLowerCase();

//  Question 1 bread
if (eatsBread === 'yes') {
    console.log('Bread answer: ' + eatsBread);
    alert('YAY');
} else if (eatsBread === 'no') {
    console.log('Bread answer: ' + eatsBread);
    alert('Lame');
} else {
    console.log('Bread answer: ' + eatsBread);
    alert(wrongResponce);
}

//  Question 2 Pizza
var eatsPizza = prompt('Do you like Pizza? (only answer with "yes" or "no")').toLowerCase();

if (eatsPizza === 'yes') {
    console.log('Pizza answer: ' + eatsPizza);
    alert('PIZZA');
} else if (eatsPizza === 'no'){
    console.log('Pizza answer: ' + eatsPizza);
    alert('WHAT?');
} else {
    console.log('Bread answer: ' + eatsPizza);
    alert(wrongResponce);
}

//  Question 3 Dinner
var eatsDinner = prompt('Is dinner your favorite meal? (only answer with "yes" or "no")').toLowerCase();

if (eatsDinner === 'yes') {
    console.log('Dinner answer: ' + eatsDinner);
    alert('Lets eat dinner!');
} else if (eatsDinner === 'no'){
    console.log('Dinner answer: ' + eatsDinner);
    alert('Lets make breakfast!');
} else {
    console.log('Bread answer: ' + eatsDinner);
    alert(wrongResponce);
}


//  Question 4 Hungry
var eatsHungry = prompt('Are you hungry now? (only answer with "yes" or "no")').toLowerCase();

if (eatsHungry === 'yes') {
    console.log('Hungry answer: ' + eatsHungry);
    alert('Lets get some food!');
} else if (eatsHungry === 'no'){
    console.log('Hungry answer: ' + eatsHungry);
    alert('Lets get some food later!');
} else {
    console.log('Bread answer: ' + eatsHungry);
    alert(wrongResponce);
}


//  Question 5 Sleep
var eatsSleep = prompt('Do you get tired after you eat a big meal? (only answer with "yes" or "no")').toLowerCase();

if (eatsSleep === 'yes') {
    console.log('Sleeps answer: ' + eatsSleep);
    alert('Time to digest!');
} else if (eatsSleep === 'no'){
    console.log('Sleeps answer: ' + eatsSleep);
    alert('Time for a jog!');
} else {
    console.log('Bread answer: ' + eatsSleep);
    alert(wrongResponce);
}

//  6 Number Question using a loop to add guess counter. 

var j = 0;

while (j++, j < 4){
    

    var numGuess = parseInt(prompt('Pick the magic number between 1 - 10 within 3 guesses: '));

    if (numGuess === 5){
        console.log('Answer: ' + numGuess + ' Correct on try: ' + j);
        alert('Nailed it! Magic number is 5');
        break;
    } else if (numGuess < 5){
        console.log('Answer: ' + numGuess + ' number of tries: ' + j);
        alert(numGuess + ' is to low, please try again.');
    }else if (numGuess > 5){
        console.log('Answer: ' + numGuess + ' number of tries: ' + j);
        alert(numGuess + ' is to high, please try again');
    } else {
            console.log('Answer: ' + numGuess + ' number of tries: ' + j);
        alert('Maybe try a number?');
    }
    if (j === 3){
        console.log('Maximum guesses exceeded. Loop exit.');
        alert('Out of guesses! Correct answer is 5.');
        break;
    }
}



//  Question 6 Array question loop iteration

// 9. Array Question: add a question that checks an array for a correct answer.
//     a. limit number of guesses (6)
//     b. provide feedback on guesses

var k = 0;
var randArr = ['red', 'blue', 'white'];

var userGuess = (prompt('choose a basic color:'));
    console.log('user input: ' + userGuess);

for(var x = 0; x < randArr.length; x++, k++){

    console.log('iteration referencing: ', x);
    if (userGuess === randArr[x]){
        alert('I like that color too!');
        console.log("k count is: " + k);
        break;
    } 
    console.log("k count is: " + k);
    // else{
    //     alert('Possible color in the future');
    // }
  }  