/**
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
*/
const mergeSortedArray = function(nums1, m, nums2, n) {
  let indexNums1 = 0;
  let indexNums2 = 0;
  for (let i = m+n; i > 0; i--) {
    if (nums1[indexNums1] < nums2[indexNums2]) {
      if (i<=m) {
        nums1[i] = nums1[indexNums1];
        indexNums1++;
      } else {
        nums1[i] = nums2[indexNums2];
        indexNums2++;
      }
    } else {
      if (i<=n) {
        nums1[i] = nums2[indexNums2];
        indexNums2++;
      } else {
        nums1[i] = nums1[indexNums1];
        indexNums1++;
      }
    }
  }
};

module.exports = mergeSortedArray;
