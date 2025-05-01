# Day27

### Approach

𝙏𝙬𝙤 𝙋𝙤𝙞𝙣𝙩𝙚𝙧
- Start from the end of array a and the beginning of array b.
- If a[i] > b[j], swap them.
- Continue this process to push larger elements toward b and smaller toward a.
- After swapping, Sort both arrays in ascending order.

### Complexity

- Time Complexity: O(n log n + m log m),
- Space Complexity: O(1).
