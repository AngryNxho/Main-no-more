function twoSum(nums, target){

  let index = [];  
  for ([x, i, z, y] = [0, 1, 1, 2]; i < nums.length; i++){
    if ((nums.length >= 2 && 
      nums.length <= 10**4) &&
      (nums[i] >= -(10**9) && 
      nums[i] <= 10**9) &&
      (target >= -(10**9) && 
      target <= 10**9)){
        op = nums[x] + nums[i];
        if (op == target){
          index.push(x, i);

        }else if (op != target && i <= 3){
         if (op != target){
           x++;
         }
          if  (nums[x] + nums[i] == target){
            x = i - 1;
            index.push(x, i);
          }
          
        }
      }
        
        // else if(op != target){
          // if (i < nums.length){
            // x = 2
          // }
        // }else{
          // console.log(2);
        // }
      // }
    };
    return index;
}

console.log(twoSum([2,7,11,15], 9)) // 0, 11
console.log(twoSum([3,2,3], 6));// 0, 2
console.log(twoSum([3,3], 6));// 0, 1
console.log(twoSum([3,2,4], 6));// 1, 2
console.log(twoSum([-1, -2, -3, -4, -5], -8));//2, 4
console.log(twoSum([6,5,7,8,9,3], 10));// 2, 5


