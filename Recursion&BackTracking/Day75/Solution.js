class Solution {
  findPermutation(s) {
    // code here
    const chars = s.split("").sort();
    const result = [];
    const visited = new Array(s.length).fill(false);
    function backtrack(path) {
      if (path.length === s.length) {
        result.push(path.join(""));
        return;
      }
      for (let i = 0; i < chars.length; i++) {
        if (visited[i]) continue;
        if (i > 0 && chars[i] === chars[i - 1] && !visited[i - 1]) continue;

        visited[i] = true;
        path.push(chars[i]);
        backtrack(path);
        path.pop();
        visited[i] = false;
      }
    }
    backtrack([]);
    return result;
  }
}

// Permutations of a String

// Given a string s, which may contain duplicate characters, your task is to generate and return an array
// of all unique permutations of the string. You can return your answer in any order.

// Examples:

// Input: s = "ABC"
// Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
// Explanation: Given string ABC has 6 unique permutations.
