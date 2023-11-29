const mergeSortedArray = require('../../src/array/mergeSortedArray');

test('input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
  nums1 = [1,2,3,0,0,0];
  m = 3;
  nums2 = [2,5,6];
  n = 3;
  mergeSortedArray(nums1, m ,nums2, n);
  expect(nums1 = [1,2,2,3,5,6]);
});