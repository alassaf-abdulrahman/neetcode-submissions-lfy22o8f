class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = [];
        let hashMap = new Map();

        for (let i = 0; i < strs.length; i++){
            let sortedValue = [...strs[i]].sort().join();
            if (hashMap.has(sortedValue)){
                output[hashMap.get(sortedValue)].push(strs[i])
            }
            else { 
                hashMap.set(sortedValue, output.length)
                output.push([strs[i]]);
            }
        }
        return output;
    }
}
