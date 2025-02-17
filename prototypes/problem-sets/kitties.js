const { kitties } = require('../datasets/kitties');
const { puppers } = require('../datasets/puppers');

// To run the code you've written in this file, use 
// node prototypes/problem-sets/kitties.js

// console.log('Running kitties.js')

/* Kitty Prompts*/

function findOrangeNames(cats) {
  let oranges = cats.filter((cat) => {
    return cat.color === "orange";
    // this first filters out all the cats that are orange and puts them in a new 
    // array called oranges. 
  })
  let orangeNames = oranges.map((cat) => {
    return cat.name
    // This then goes through the filtered array (oranges) and returns cat by it's name
  })
  return orangeNames
}

// console.log(findOrangeNames(kitties))
// console.log(findOrangeNames(puppers))
/*
Level 1

Code: 
  Write a function called "findOrangeNames" that returns an array of just the names of kitties who are orange 


Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findOrangeNames())
    should print --> ['Tiger', 'Snickers']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/


function sortByAge(kitties) {
  return kitties.sort((a,b) => {
    return b.age - a.age;
  });
}

// console.log(sortByAge(kitties))
// console.log(sortByAge(puppers))

/*
Level 2

Code: 
  Write a function called "sortByAge" that returns an array of kitty objects that are sorted from oldest to youngest.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByAge())
    should print -->   
      [{
        name: 'Snickers',
        age: 8,
        color: 'orange'
      },
      {
        name: 'Tiger',
        age: 5,
        color: 'orange'
      },
      {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, 
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function growUp(kitties) {
  kitties.forEach((kitty) => {
    kitty.age += 2;
  });
  return kitties;
}

// console.log(growUp(kitties))
// console.log(growUp(puppers))
/*
Level 3

Code: 
  Write a function called "growUp" that returns an array of kitty objects that have all grown up by 2 years.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(growUp())
    should print -->   
      [{
        name: 'Felicia',
        age: 4,
        color: 'grey'
      },
      {
        name: 'Tiger',
        age: 7,
        color: 'orange'
      },
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
  

/*
Level 4

Currently, your functions are probably using the imported `kitties` global variable from line 1.

Code:
  Refactor the three functions above using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.

Invoke:
  Invoke each refactored function twice, once passing the kitties data as an argument and once passing the puppers data as an argument

e.g.
  console.log(findOrangeNames(kitties)) --> same result as above
  console.log(sortByAge(kitties)) --> same result as above
  console.log(growUp(kitties)) --> same result as above

  console.log(findOrangeNames(puppers)) 
    should return --> ["Hatchet", "Butter"]

  console.log(sortByAge(puppers)) 
    should return --> 
      [{
        name: 'Scout',
        age: 12,
        color: 'grey'
      },
      {
        name: 'Stick',
        age: 6,
        color: 'brown'
      },
      ...etc]

  console.log(growUp(puppers))
    should return --> 
      [{
        name: 'Scout',
        age: 14,
        color: 'grey'
      },
      {
        name: 'Hatchet',
        age: 5,
        color: 'orange'
      },
      ...etc]

Annotation:
  Jot down any takeaways, questions, or reflections about this refactoring.
*/


/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the 3 Kitty Prompts tests and 3 Kitty Prompts Refactor tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 6 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/





module.exports = {
  findOrangeNames,
  sortByAge,
  growUp
};
