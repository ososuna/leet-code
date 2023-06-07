const twoSum = require('../../src/hashTable/twoSum');

test('input: nums = [2,7,11,15], target = 9', () => {
  expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1]);
});

test('input: nums = [3,2,4], target = 6', () => {
  expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
});

test('input: nums = [3,3], target = 6', () => {
  expect(twoSum([3,3], 6)).toStrictEqual([0,1]);
});

test('input: nums = [3,2,3], target = 6', () => {
  expect(twoSum([3,2,3], 6)).toStrictEqual([0,2]);
});

test('input: nums = [0,4,3,0], target = 0', () => {
  expect(twoSum([0,4,3,0], 0)).toStrictEqual([0,3]);
});

test('input: nums = [-1,-2,-3,-4,-5], target = -8', () => {
  expect(twoSum([-1,-2,-3,-4,-5], -8)).toStrictEqual([2,4]);
});

test('input: nums = [-3,4,3,90], target = 0', () => {
  expect(twoSum([-3,4,3,90], 0)).toStrictEqual([0,2]);
});
