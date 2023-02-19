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




// !========================================================================

function regexVar(str) {
    const re = /^([aeiou]).*\1$/;
    return re.test(str);
}


console.log(regexVar('abcda')); // Output: true
console.log(regexVar('abcdo')); // Output: false



// !======================================================

function regexVar() {
    /*
     * ^ - start of string
     * (Mr|Mrs|Ms|Dr|Er) - one of the prefix options
     * \. - a literal period character
     * [a-zA-Z]+ - one or more English alphabetic letters
     * $ - end of string
     */
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;

    return re;  

}


// !=======================================================


function regexVar() {
    /*
     * \d+ - one or more digits
     * \b - a word boundary to ensure we only match whole numbers
     */

    // const re =  /\b\d+\b/g; 

    const re = /([0-9])+/g;
    
    return re;
}


const regex = regexVar();

console.log('102, 1948948 and 1.3 and 4.5'.match(regex));
 // ['102', '1948948', '1', '3', '4', '5']
console.log('1 2 3'.match(regex));
 // ['1', '2', '3']
console.log('abc123'.match(regex));
 // ['123']
