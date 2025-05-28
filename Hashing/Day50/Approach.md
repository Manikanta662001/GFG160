# Day50

### Approach

- Use a prefix XOR to track the XOR of all elements up to the current index.
Maintain a frequency map of all prefix XORs seen so far.
- For each prefix XOR, check if prefixXor ^ k exists in the map:
- If it does, it means there exists a subarray ending at the current index with XOR = k.
- Initialize the map with {0: 1} to handle subarrays starting from index 0.
- Traverse the array once, update the prefix XOR, check and update the count using the map, and update the map with the current prefix XOR.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(n).
