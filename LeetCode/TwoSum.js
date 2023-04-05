const twoSum = (nums, target) => {
  let index = [];
  let i = 0;
  let x = 0;


  while (i < nums.length){
    console.log(i);
    i++
    if (nums[x] + nums[i] == target){
      index.push(x, i);
    };
  };

  console.log(index);
};

// twoSum([2, 7, 11, 15], (target = 9)); // [0,1] SI
// twoSum([3, 2, 4], target = 6);// [1,2] Si
// twoSum([3,3], target = 6);//[0,1] Si                                                                                                                                                                                     
twoSum([3], target = 6);//[0,1] No
// twoSum([2, 7, 11, 15], target = 17);//[0,3] Si
