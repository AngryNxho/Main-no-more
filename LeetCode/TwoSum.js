
function twoSum(nums, target){


  let index = [];  

  for ([x, i] = [0, 1]; i <= nums.length; i++){
    if (nums[x] + nums[i] == target){
      index.push(x, i);
    }else if (nums[x] + nums[i] == target && i == nums.length){
      console.log(2);
    }
  }
    return index;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,3], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,4], 6));


