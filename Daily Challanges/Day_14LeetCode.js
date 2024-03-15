/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const n = nums.length;

    // Initialize the result array
    const result = new Array(n).fill(1);

    // Calculate prefixes and store in the result array
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }

    // Calculate postfixes and update the result array in-place
    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }

    return result;
};