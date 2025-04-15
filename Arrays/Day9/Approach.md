# Day9

### Approach

- Sort the Array.
- Calculate the initial difference between the max and min elements: maxDiff = arr[n-1] - arr[0].
- Traverse the sorted array and for each i, split the array into two parts
  -Increase the first part by K.
  -Decrease the second part by K.
- Track Minimum and Maximum Heights.
- Return the Minimum Difference.

### Complexity

- Time Complexity: O(n log n),
- Space Complexity: O(1).
