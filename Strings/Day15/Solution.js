class Solution {
  addBinary(s1, s2) {
    // code here
    let i = s1.length - 1;
    let j = s2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
      let bit1 = i >= 0 ? parseInt(s1[i]) : 0;
      let bit2 = j >= 0 ? parseInt(s2[j]) : 0;

      let sum = bit1 + bit2 + carry;
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
      i--;
      j--;
    }
    return result.replace(/^0+(?=\d)/, "");
  }
}

// Add Binary Strings

// Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after
// adding the two Binary Strings.
// Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

// Input: s1 = "1101", s2 = "111"
// Output: 10100
// Explanation:
//  1101
// + 111
// 10100
