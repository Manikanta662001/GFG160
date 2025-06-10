# Day62

### Approach

- Initialize currSum = 0, maxLength = 0, and an empty map.
- Loop through each element in the array:
 - Update currSum by adding arr[i].
 - If currSum === k, update maxLength = i + 1.
 - If currSum - k is in map, update maxLength = max(maxLength, i - map[currSum - k]).
 - If currSum is not in map, store currSum -> i.
- Return maxLength.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
