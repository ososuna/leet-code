/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let values = {};
  for (let index = 0; index < nums.length; index++) {
    values[nums[index]] = target - nums[index];
  }
  for (let index = 0; index < Object.keys(values).length; index++) {
    const firstIndex = nums.indexOf(Number(Object.keys(values)[index]));
    if (nums.indexOf(Object.values(values)[index], firstIndex+1) !== -1) {
      return [firstIndex, nums.indexOf(Object.values(values)[index], firstIndex+1)];
    }
  }
};

module.exports = twoSum;
