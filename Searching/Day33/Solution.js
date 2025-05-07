class Solution {
  // Function to solve the problem.
  aggressiveCows(stalls, k) {
    // your code here
    stalls.sort((a, b) => a - b);
    function canPlaceCows(sortedStalls, k, minDist) {
      let count = 1;
      let lastPosition = sortedStalls[0];
      for (let i = 1; i < sortedStalls.length; i++) {
        if (sortedStalls[i] - lastPosition >= minDist) {
          count++;
          lastPosition = sortedStalls[i];
        }
      }
      return count >= k;
    }
    let low = 1;
    let high = stalls[stalls.length - 1] - stalls[0];
    let result = 0;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (canPlaceCows(stalls, k, mid)) {
        result = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return result;
  }
}
// Aggressive Cows

// You are given an array with unique elements of stalls[], which denote the position of a stall.
// You are also given an integer k which denotes the number of aggressive cows. Your task is to assign stalls
// to k cows such that the minimum distance between any two of them is the maximum possible.

// Examples :

// Input: stalls[] = [1, 2, 4, 8, 9], k = 3
// Output: 3
// Explanation: The first cow can be placed at stalls[0],
// the second cow can be placed at stalls[2] and
// the third cow can be placed at stalls[3].
// The minimum distance between cows, in this case, is 3, which also is the largest among all possible ways.
