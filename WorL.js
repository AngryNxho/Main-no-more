// if (nums[y] + nums[i] == target){
  // index.push(y, i);
// 
//  }else if (nums[x] + nums[i] != target){
  //  x = (i - 1)
  //  if (nums[x] + nums[i] == target){
    //  index.push(x, i);
  //  }
//  }else if (index.length != target){
  //  index.push(x, i);
//  }
// 
if (nums[x] + nums[i] == target){
  index.push(x, i);
    x++;
  }else if (nums[x] + nums[i] != target){
  x = i - 1;
  if (nums[x] + nums[i] == target){
      index.push(x, i);
  }
}
console.log(twoSum([2,7,11,15], 9)) // 0, 1
console.log(twoSum([3,2,3], 6));// 0, 2
console.log(twoSum([3,3], 6));// 0, 1
console.log(twoSum([3,2,4], 6));// 1, 2
console.log(twoSum([-1, -2, -3, -4, -5], -8));//2, 4
console.log(twoSum([6,5,7,8,9,3], 10));// 2, 5
