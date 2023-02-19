function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o","u","A","E","I" ,"O" ,"U"];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s.charAt(i))){
            console.log(s.charAt(i));
           
        }
           
      }
      for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s.charAt(i))){
            console.log(s.charAt(i)); 
           
        }             
      }

     
}
// vowelsAndConsonants("javascriptloops")



//!---------------------------------------------------------



const PI = Math.PI;

function main() {
    var r = parseFloat(readLine());
    
    console.log(PI * r * r);
    console.log(2 * PI * r);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// main(2.6);


//!----------------------------------------------------------------











