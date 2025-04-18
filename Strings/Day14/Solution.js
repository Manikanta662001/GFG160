class Solution {
  myAtoi(s) {
    // code here
    let i = 0;
    let len = s.length;
    let result = 0;
    let sign = 1;

    while (i < len && s[i] === " ") {
      i++;
    }

    while (i < len && (s[i] === "-" || s[i] === "+")) {
      sign = s[i] === "-" ? -1 : 1;
      i++;
    }

    while (i < len && s[i] >= "0" && s[i] <= "9") {
      let digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
      result = result * 10 + digit;
      i++;
    }

    result *= sign;
    if (result === 0) return 0;

    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
  }
}

// Implement Atoi

// Given a string s, the objective is to convert it into integer format without utilizing any built-in functions.
// Refer the below steps to know about atoi() function.

// Cases for atoi() conversion:

// Skip any leading whitespaces.
// Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
// Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the
// string is reached. If no digits are present, return 0.
// If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231,
// then return -231.

// Examples:

// Input: s = "-123"
// Output: -123
// Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer
