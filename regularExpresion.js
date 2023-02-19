
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
