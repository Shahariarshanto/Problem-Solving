// Find First index of "Bangladesh" 
// How many times "Awami" word used in this sentence 

const sentence = "In our Bangladesh, no force has emerged yet, which can oust the Awami League government, she said, replying to a supplementary question from Jatiya Party lawmaker Fakhrul Imam. Sheikh Hasina, also the president of ruling Awami League (AL), said AL is a party that wasnt born from the pocket of any illegal power-grabber and military dictator, rather its birth was from the soil and the people of this country. ";


let result = sentence.search(/bangladesh/i)
result = result >= 0 ? result : "Not Found";



const matches = sentence.match(/awami/gi)
const result2 = matches ?  matches.length : 0;

// console.log(result)

// ----------------------------------------------------------//

// linearSearch([a,b,c,d,c],'c')
//Output: 2 or "not found!"
//Implement linearSearch Function()


const linearSearch = (arr,item)=>{

    let result = arr.findIndex((value)=> value.toLowerCase() == item.toLowerCase());

    return result == -1 ?  "Not Found" : result ;
}

// console.log(linearSearch(["a","b","c","d","c"],"c"))



// ----------------------------------------------------------//

// Find The Largest String and Index Number ==> From an Array 

const largestString = names => {
    let largestString = 0;

    let result = [] ;
    

    for (const name of names) {
        if(name.length > largestString){
            largestString = name.length;
           result[1] = name;
           result[0] = names.indexOf(name);
        }
    }
        return result;
}

// console.log(largestString(["shanto",  "sumit", "jhankar", "Akash" ,"toto","fsdj" ,  "shahariar shanto" ]))



//!---------------------------------------------------------]\

function getLetter(s) {
    let letter;
    // Write your code here
    

    switch (s[0].toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }

    return letter;
}

    // console.log(getLetter("adfgt"));


    //!----------------------------------------------------------------\

