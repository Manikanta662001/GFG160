# Day31

### Approach

- Initialize low = 0 and high = arr.length - 1.
- Calculate mid = Math.floor((low + high) / 2).
- If arr[mid] > left and arr[mid] > right, arr[mid] is a peak, return mid.
- If the left neighbor is greater than arr[mid], there must be a peak on the left side, so do high = mid - 1.
- Otherwise, search the right side with low = mid + 1.
- If no peak is found return -1.

### Complexity

- Time Complexity: O(log n),
- Space Complexity: O(1).
