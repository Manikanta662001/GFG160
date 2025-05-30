# Day55

### Approach

- Sort the array in non-decreasing order.
- Fix the third side (largest side) at index k from the end.
- Use two pointers (i, j) to find how many pairs before index k can form a triangle.
 - Start i = 0, j = k - 1.
 - If arr[i] + arr[j] > arr[k]:
 - All elements from i to j - 1 will also satisfy this.
 - So, add (j - i) to the count and move j--.
 - Else:
 - Move i++ to try a bigger left side.

### Complexity

- Time Complexity: O(n^2),
- Space Complexity: O(1).
