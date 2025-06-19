class Solution {
  /**
   * Computes b raised to the power e recursively.
   * @param {number} b - The base.
   * @param {number} e - The exponent.
   * @returns {number} - The result of b^e.
   */
  power(b, e) {
    // Code here
    if (e === 0) return 1;
    let base = b;
    let exponent = Math.abs(e);
    let result = 1;
    // Check
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result *= base;
      }
      base *= base;
      exponent = Math.floor(exponent / 2);
    }
    return e < 0 ? 1 / result : result;
  }
}

// Implement Pow

// Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).

// Examples:

// Input: b = 3.00000, e = 5
// Output: 243.00000
