class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;

        nums.sort((a, b) => a - b).sort((a, b) => {
            if (a === b) {
                result = true
            }

            return;
        });
        
        return result;
    }
}
