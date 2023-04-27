function twoSum(nums, target){

  let index = [];  

  for (let x in nums){
    for (let i = 0; i < nums.length; i++){
      if (nums[i] + nums[x] == target && nums[i] != nums[x]){
        // console.log(`${nums[x]} + ${nums[i]} = ${nums[i] + nums[x]}`);
        if (index.length <= 1){
          index.push(x, i)
        }
      }
    }
  }
  
  return index;
}

console.log(twoSum([2,7,11,15], 9)) // 0, 1
console.log(twoSum([3,2,3], 6));// 0, 2
console.log(twoSum([3,3], 6));// 0, 1
console.log(twoSum([3,2,4], 6));// 1, 2
console.log(twoSum([-1, -2, -3, -4, -5], -8));//2, 4 \\ 6
console.log(twoSum([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], 11)); //5, 11
console.log(twoSum([6,5,7,8,9,3], 10));// 2, 5 \\ 7
