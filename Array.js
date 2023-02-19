/**
 * !Remove === duplicate numbers from an array
 */

const numbers = [1,2,3,4,5,6,1,7,9,8,2,5]

const duplicate = numbers.filter((value,index,array)=>{

    return array.indexOf(value) !== index

    
})

console.log(duplicate)

//!-----------------------------------------------------------



function modifyArray(nums) {
    return nums.map(num => num % 2 === 0 ? num * 2 : num * 3);
}

const nums = [1, 2, 3, 4, 5];

const modifiedNums = modifyArray(nums);

console.log(modifiedNums);
// Output: [3, 4, 9, 8, 15]



