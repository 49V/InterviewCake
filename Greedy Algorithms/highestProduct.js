const arrayOfInts = [1, 10, -5, 1, -100];

// Given an array of integers, calculates the highest product of 3
function findHighestProductOf3(arrayOfInts) {
  if(arrayOfInts.length < 3) {
    throw new error("Require an array of at least length 3");
  }

  let highest = arrayOfInts[0];
  let lowest = arrayOfInts[0];
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = highest * arrayOfInts[1];
  let lowestProductOf2 = lowest * arrayOfInts[1];
  
  for(let currentIndex = 1; currentIndex < arrayOfInts.length; currentIndex++) {
    const currentInteger = arrayOfInts[currentIndex];
    console.log("CURRENT INDEX: ", currentIndex);
    console.log("\tCURRENT INTEGER: ", currentInteger);
    console.log("\tHIGHEST PRODUCT OF 2: ", highestProductOf2);
    console.log("\tLOWEST PRODUCT OF 2: ", lowestProductOf2);
    console.log("\t\tHIGHEST: ", highest);
    console.log("\t\tLOWEST: ", lowest);
    
    // First: Update products of 3
    const potentialProductOf3FromHighest = highestProductOf2 * currentInteger;
    const potentialProductOf3FromLowest = lowestProductOf2 * currentInteger;
    highestProductOf3 = Math.max(highestProductOf3, potentialProductOf3FromHighest, potentialProductOf3FromLowest);

    // Second: Update products of 2
    const potentialHighestProductOf2 = highest * currentInteger;
    const potentialLowestProductOf2 = lowest * currentInteger;
    highestProductOf2 = Math.max(highestProductOf2, potentialHighestProductOf2, potentialLowestProductOf2);
    lowestProductOf2 = Math.min(lowestProductOf2, potentialHighestProductOf2, potentialLowestProductOf2);

    // Third: Update highest / lowest values
    highest = Math.max(highest, currentInteger);
    lowest = Math.min(lowest, currentInteger);
  }

  return highestProductOf3;
}

console.log(findHighestProductOf3(arrayOfInts));