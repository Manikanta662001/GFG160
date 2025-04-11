# Day6

### Approach

- Initialize Two Candidates.
- Loop through the array. If the current element matches a candidate, increase its count.
- If a candidate’s count is zero, assign the current element as that candidate.
- If it matches neither and no count is zero, decrement both counts.
- Reset counts to zero. Count actual frequency of both candidates in the array.
- If any candidate appears more than ⌊n/3⌋ times, add it to the result. Return the result in sorted order.

### Complexity
- Time Complexity: O(n),
- Space Complexity: O(1).