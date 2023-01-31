/**
 * !Remove === duplicate numbers from an array
 */

const numbers = [1,2,3,4,5,6,1,7,9,8,2,5]

const duplicate = numbers.filter((value,index,array)=>{

    return array.indexOf(value) !== index

    
})

console.log(duplicate)

//!-----------------------------------------------------------