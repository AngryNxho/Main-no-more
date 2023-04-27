function twoSum(nums, target){

  let index = [];  
  for ([x, i, z] = [0, 1, 1]; i < nums.length; i++){
    if (nums[0] + nums[i] == target){
      index.push(0, i);
    }else if (nums[x] + nums[i] != target){
      x = i - 1;
      if (nums[x] + nums[i] == target){
        index.push(x, i)
      }else{
        x--;
        if (nums[x] + nums[i] == target ){
          index.push(x, i);
        }
    }
    
  }
}
  return index;
}
console.log(twoSum([2,7,11,15], 9)) // 0, 11
console.log(twoSum([3,2,3], 6));// 0, 2
console.log(twoSum([3,3], 6));// 0, 1
console.log(twoSum([3,2,4], 6));// 1, 2
console.log(twoSum([-1, -2, -3, -4, -5], -8));//2, 4 \\ 6
console.log(twoSum([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], 7)); //5, 11
console.log(twoSum([6,5,7,8,9,3], 10));// 2, 5 \\ 7

