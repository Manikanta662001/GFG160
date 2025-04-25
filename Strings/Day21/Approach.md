# Day21

### Approach

𝘿𝙪𝙩𝙘𝙝 𝙉𝙖𝙩𝙞𝙤𝙣𝙖𝙡 𝙁𝙡𝙖𝙜 𝘼𝙡𝙜𝙤𝙧𝙞𝙩𝙝𝙢
- Use 3 pointers, low for 0's, mid for current element and high for 2's.
- If arr[mid] === 0, swap arr[low], increment low and mid.
- If arr[mid] === 1, increment low.
- If arr[mid] === 2, swap arr[high], decrement high.
- Finally return array.

### Complexity

- Time Complexity: O(n),
- Space Complexity: O(1).
