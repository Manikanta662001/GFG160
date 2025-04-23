class Solution {
  minChar(s) {
      // your code here
      const buildLps = (str) => {
          const lps = Array(str.length).fill(0);
          let len = 0, i = 1;
          while(i < str.length) {
              if(str[i] === str[len]) {
                  len++;
                  lps[i] = len;
                  i++;
              } else {
                  if(len !==0) {
                      len = lps[len - 1];
                  } else {
                      lps[i] = 0;
                      i++;
                  }
              }
          }
          return lps;
      }
      
      const reversedStr = s.split("").reverse().join("");
      const combinedSTr = s + "$" + reversedStr;
      const lps = buildLps(combinedSTr);
      return s.length - lps[lps.length - 1];
  }
}

// Min Chars to Add for Palindrome

// Given a string s, the task is to find the minimum characters to be added at the front to make the string 
// palindrome.

// Note: A palindrome string is a sequence of characters that reads the same forward and backward.

// Examples:

// Input: s = "abc"
// Output: 2
// Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"
