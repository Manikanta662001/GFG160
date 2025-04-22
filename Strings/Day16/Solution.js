class Solution {
  areAnagrams(s1, s2) {
    // code here
    if (s1.length !== s2.length) return false;

    let freq = new Map();

    for (let ch of s1) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for (let ch of s2) {
      if (!freq.get(ch)) return false;

      freq.set(ch, freq.get(ch) - 1);
    }

    return true;
  }
}

// Anagram

// Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether
// two given strings are an anagram of each other or not. An anagram of a string is another string
// that contains the same characters, only the order of characters can be different.
// For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase
// alphabets.

// Note: You can assume both the strings s1 & s2 are non-empty.

// Examples :

// Input: s1 = "geeks", s2 = "kseeg"
// Output: true
// Explanation: Both the string have same characters with same frequency. So, they are anagrams.
