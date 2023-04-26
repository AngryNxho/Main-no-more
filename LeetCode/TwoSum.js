function twoSum(nums, target){

  let index = [];  
  for ([x, y, i] = [0, 0, 1]; i < nums.length; i++){
    if ((nums.length >= 2 && nums.length <= 10**4) &&
    (nums[i] >= -(10**9) && nums[i] <= 10**9) &&
    (target >= -(10**9) && target <= 10**9)){

        if (nums[y] + nums[i] == target){
         index.push(y, i);

        }else if (nums[x] + nums[i] != target){
          x = (i - 1)
          if (nums[x] + nums[i] == target){
            index.push(x, i);
          }
        }else if (index.length != target){
          index.push(x, i);
        }
      }
    }
    return index;
}


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,3], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,2,3], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));


