# Day34

### Approach

- If k > arr.length, it's impossible to assign at least one book to each student.
- Math.max(...arr) (a student must get at least that much).
- The maximum possible value is the sum of all pages, i.e. arr.reduce(...) (if one student gets all books).
- If isValid(mid):
 - Store mid as a potential result.
 - Try to find smaller value → search left: high = mid - 1.
- else Try higher page limits → search right: low = mid + 1.

### Complexity

- Time Complexity: O(n * log(sum - max)),
- Space Complexity: O(1).
