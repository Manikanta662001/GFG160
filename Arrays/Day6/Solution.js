class Solution {
  findMajority(arr) {
    // Your code goes here
    let candidate1 = null,
      count1 = 0;
    let candidate2 = null,
      count2 = 0;

    for (let num of arr) {
      if (num === candidate1) {
        count1++;
      } else if (num === candidate2) {
        count2++;
      } else if (count1 === 0) {
        candidate1 = num;
        count1 = 1;
      } else if (count2 === 0) {
        candidate2 = num;
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    }

    count1 = 0;
    count2 = 0;
    for (let num of arr) {
      if (num === candidate1) count1++;
      else if (num === candidate2) count2++;
    }
    const result = [];
    const n = arr.length;
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result.sort((a, b) => a - b);
  }
}

// Majority Element II

// You are given an array of integer arr[] where each number represents a vote to a candidate.
// Return the candidates that have votes greater than one-third of the total votes, If there's not a majority 
// vote, return an empty array.

// Note: The answer should be returned in an increasing format.

// Examples:

// Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.
