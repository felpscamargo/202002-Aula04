
//Não consegui com reduce e arrow.

var i, j, num;
var nums = [5, 20, 15, 50, 33, 44, 1];

for (i = 1; i < nums.length; i++){
    num = nums[i];
    j = i - 1;

    while((j >= 0) && (nums[j] > num)){
        nums[j + 1] = nums[j];
        j--;
    }
    nums[j + 1] = num;
}

console.log(nums);

