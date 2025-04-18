# Day12

### Approach

- Find the maximum subarray sum using Kadane’s Algorithm.
- If all elements are negative, the maximum subarray is the single largest element.
- Directly return the result from Kadane’s Algorithm.
- Calculate the sum of all elements in the array.
- Invert the sign of every element and apply Kadane’s Algorithm.
- This gives the maximum of the negative of the minimum subarray sum.
- Hence, minSubarraySum = totalSum + kadane(invertedArr).
- The maximum circular subarray sum = totalSum - (minimum subarray sum).
- return maximum between normal case and circular case.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
