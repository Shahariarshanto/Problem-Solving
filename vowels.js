const vowels = ["a","e","i","o","u","A","E","I","O","U"]


function vowelsCount (sentence){
    let count = 0;
    const letters = Array.from(sentence)
    letters.forEach(letter =>{
        if(vowels.includes(letter)){
            count++;
        }
    })

    return count;
}

// console.log(vowelsCount("I love Programing"))

const solution = (letter)=> {
    //Write Your solution Here
    const vowels = ["a","e","i","o","u","A","E","I","O","U"]
    const result = vowels.includes(letter)
    return result ? "VOWEL" : "CONSONANT";

  };
  console.log(solution(''))


  const deleteProperty =(arr)=>{
    // Write your code here.


    }

    console.log(deleteProperty())