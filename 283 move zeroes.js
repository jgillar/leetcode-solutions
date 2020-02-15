/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    let pointer1 = 0;
    let pointer2 = 0;
    
    while(pointer1 <  nums.length){
        if(nums[pointer1] !== 0){
            pointer1++;
            continue;
        }
        
        pointer2 = pointer1;
        while(pointer2 < nums.length)
        {
                if(nums[pointer2] !== 0){
                    [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
                    break;
                }
                
                pointer2++
         }

        pointer1++;
    }
    
    return nums;