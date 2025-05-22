# Day48

### Approach

- Intialize an empty map.
- Loop through the array of strings and sort each word in ascending order.
- If that sorted key is not present in map add that key and value as empty array.
- Push that word into that array.
- Finally return only values of that Map using Array.from(map.values()).

### Complexity

- Time Complexity: O(n * k log k),
- Space Complexity: O(n + k).
