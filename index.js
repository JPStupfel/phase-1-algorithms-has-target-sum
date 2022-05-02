function hasTargetSum(array, target) {

  for (let i = 0; i<array.length;i++){
    for (j=i+1;j<array.length;j++){
      console.log(i, j)
      if (array[i] + array[j] === target){return true}
    }
  }
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  iterate through array

  check element against rest of array for whether they sum the second arg

  if so, break loop and return true

  else at end return false

*/

/*
  Add written explanation of your solution here

  I am going to have to iterate through an array, and for each of those elements, check them against the remainder of the array to see if they add up to the functions second input.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;




