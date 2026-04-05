class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashMap = new Map();
        let freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            hashMap.set(num, (hashMap.get(num) || 0) + 1);
        }

        hashMap.forEach((value, key) => {
            freq[value].push(key);
        });

        let output = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (let num of freq[i]) {
                output.push(num);
                if (output.length === k) {
                    return output;
                }
            }
        }
    }
}