class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let i = 0; i < strs.length; i++) {
            result += `${strs[i].length}#${strs[i]}`
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = [];

        for (let i = 0; i < str.length; i++) {
            let subStrLength = str.substr(i).split("#").at(0);
            i += subStrLength.length + 1;
            let subStr = "";
            for (let j = 0; j < Number(subStrLength); j++) {
                subStr += str[i];
                i++;
            }
            output.push(subStr);
            i--;
        }

        return output;
    }
}
