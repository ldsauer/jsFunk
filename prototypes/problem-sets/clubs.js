const { clubs } = require('../datasets/clubs');

// To run the code you've written in this file, use node prototypes/problem-sets/clubs.js

// console.log('Running clubs.js')

/* Clubs Prompts*/

function findClubMembers() {
  const newObjects = {};
  clubs.forEach((club) => {
    club.members.forEach(member => {
      if (!newObjects[member]) {
        newObjects[member] = [];
      }
      newObjects[member].push(club.club);
    });
  });
  return newObjects;
}

console.log(findClubMembers(clubs))
/*
Level 1

Code: 
  Write a function called "findClubMembers" that takes in the clubs data as an argument.  Your function should create an object whose keys are the names of people, and whose values are arrays that include the names of the clubs that person is a part of. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findClubMembers(clubs))
    should print --> 
    {
      Louisa: ['Drama', 'Art'],
      Pam: ['Drama', 'Art', 'Chess'],
      Nathaniel: ['Drama', 'Astronomy'],
      ...etc
    }

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
  1. create an empty object ( const newObjects = {};) to push in the new structure
  2. iterate over each club  ( clubs.forEach((club) => ) to see the data each club holds
  3. use another forEach to iterate over the members array (club.members.forEach(member =>)
  4. check to see if there is already a key for the member name in our newly created obj (newObjects)
  5. if there is not a already a key with the member name, create an empty array as members value. (newObjects[member] = [])
  6. if there already is a key with the member name, push the club into that array value (newObjects[member].push(club.club))
  7. always return your new onject
*/



/*
Level 2

Test:
  *Uncomment the module.exports below.
  *Unskip the 1 Club Prompts test in your prototype-test.js file.
  *Run `npm test` to confirm that your function is passing the test.
  *Refactor as needed until the test is passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



module.exports = {
  findClubMembers
};
