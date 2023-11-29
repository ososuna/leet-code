const mergeSortedArray = require('../../src/array/mergeSortedArray');

test('input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
  nums1 = [1,2,3,0,0,0];
  m = 3;
  nums2 = [2,5,6];
  n = 3;
  mergeSortedArray(nums1, m ,nums2, n);
  expect(nums1 = [1,2,2,3,5,6]);
});

test('input: nums1 = [1], m = 1, nums2 = [0], n = 0', () => {
  nums1 = [1];
  m = 1;
  nums2 = [0];
  n = 0;
  mergeSortedArray(nums1, m ,nums2, n);
  expect(nums1 = [1]);
});

test('input: nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
  nums1 = [0];
  m = 0;
  nums2 = [1];
  n = 1;
  mergeSortedArray(nums1, m ,nums2, n);
  expect(nums1 = [1]);
});