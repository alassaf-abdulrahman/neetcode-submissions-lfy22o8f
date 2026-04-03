class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
        let goal = target - nums[i];
            if (hashMap.has(goal))
                return [hashMap.get(goal), i];
            else 
                hashMap.set(nums[i], i);
        }
    }
}
