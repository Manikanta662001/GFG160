class Solution {
  countDistinct(arr, k) {
    // code here
    const result = [];
    const freqMap = new Map();
    for (let i = 0; i < k; i++) {
      freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }
    result.push(freqMap.size);
    for (let i = k; i < arr.length; i++) {
      const outEle = arr[i - k];
      freqMap.set(outEle, freqMap.get(outEle) - 1);
      if (freqMap.get(outEle) === 0) {
        freqMap.delete(outEle);
      }
      const inEle = arr[i];
      freqMap.set(inEle, (freqMap.get(inEle) || 0) + 1);
      result.push(freqMap.size);
    }
    return result;
  }
}
// Count distinct elements in every window

// Given an integer array arr[] and a number k. Find the count of distinct elements in every window of size k in
// the array.

// Examples:

// Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
// Output:  [3, 4, 4, 3]
// Explanation: Window 1 of size k = 4 is 1 2 1 3. Number of distinct elements in this window are 3.
// Window 2 of size k = 4 is 2 1 3 4. Number of distinct elements in this window are 4.
// Window 3 of size k = 4 is 1 3 4 2. Number of distinct elements in this window are 4.
// Window 4 of size k = 4 is 3 4 2 3. Number of distinct elements in this window are 3.
