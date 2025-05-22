class Solution {
  anagrams(arr) {
    // code here
    const map = new Map();
    for (let word of arr) {
      let sorted = word.split("").sort().join("");
      if (!map.has(sorted)) {
        map.set(sorted, []);
      }
      map.get(sorted).push(word);
    }
    return Array.from(map.values());
  }
}
// Print Anagrams Together

// Given an array of strings, return all groups of strings that are anagrams. The strings in each group must
// be arranged in the order of their appearance in the original array. Refer to the sample case for
// clarification.

// Examples:

// Input: arr[] = ["act", "god", "cat", "dog", "tac"]
// Output: [["act", "cat", "tac"], ["god", "dog"]]
// Explanation: There are 2 groups of anagrams "god", "dog" make group 1. "act", "cat", "tac" make group 2.
