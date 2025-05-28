class Solution {
  countTriplets(arr, target) {
    // code here
    let count = 0;
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
      while (left < right) {
        const sum = arr[i] + arr[right] + arr[left];
        if (sum === target) {
          if (arr[left] === arr[right]) {
            const total = right - left + 1;
            count += (total * (total - 1)) / 2;
            break;
          } else {
            let leftCount = 1;
            let rightCount = 1;
            while (left + 1 < right && arr[left] === arr[left + 1]) {
              leftCount++;
              left++;
            }
            while (right - 1 > left && arr[right] === arr[right - 1]) {
              rightCount++;
              right--;
            }
            count += leftCount * rightCount;
            left++;
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    return count;
  }
}
// Count all triplets with given sum in sorted array

// Given a sorted array arr[] and a target value, the task is to count triplets (i, j, k) of valid indices,
// such that arr[i] + arr[j] + arr[k] = target and i < j < k.

// Examples:

// Input: arr[] = [-3, -1, -1, 0, 1, 2], target = -2
// Output: 4
// Explanation: Four triplets that add up to -2 are:
// arr[0] + arr[3] + arr[4] = (-3) + 0 + (1) = -2
// arr[0] + arr[1] + arr[5] = (-3) + (-1) + (2) = -2
// arr[0] + arr[2] + arr[5] = (-3) + (-1) + (2) = -2
// arr[1] + arr[2] + arr[3] = (-1) + (-1) + (0) = -2
