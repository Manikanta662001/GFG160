# Day26

### Approach

𝗚𝗿𝗲𝗲𝗱𝘆 𝘀𝘁𝗿𝗮𝘁𝗲𝗴𝘆
- if there are no intervals return 0.
- Sort intervals by their end time.
- For each interval:
 - If it overlaps with the previous, increment the count.
 - Else, update the end marker.

### Complexity

- Time Complexity: O(n log n),
- Space Complexity: O(1).
