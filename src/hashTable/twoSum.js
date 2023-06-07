/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let values = {};
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < target) {
      values[nums[index]] = target - nums[index];
    }
  }
  var firstIndex = nums.indexOf(Number(Object.keys(values)[0]));
  return [firstIndex, nums.indexOf(Object.values(values)[0], firstIndex+1)];
};

module.exports = twoSum;
