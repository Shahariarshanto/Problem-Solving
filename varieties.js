function getGrade(marks) {
    if (marks >= 80) {
      return 'A';
    } else if (marks >= 60) {
      return 'B';
    } else if (marks >= 50) {
      return 'C';
    } else if (marks >= 40) {
      return 'D';
    } else {
      return 'F';
    }
  }
//   console.log(getGrade());


//!-------------------------------------------------------------


  function getGrade(score) {
    let grade;
    if (25 < score && score <= 30) {
        grade = "A";
    } else if (20 < score && score <= 25) {
        grade = "B";
    } else if (15 < score && score <= 20) {
        grade = "C";
    } else if (10 < score && score <= 15) {
        grade = "D";
    } else if (5 < score && score <= 10) {
        grade = "E";
    } else if (0 < score && score <= 5) {
        grade = "F";
    } 

    return grade;
}


console.log(getGrade())



//! Average Mark in Number  -----------------------------------------

function average (arrOfMarks){
    //write your code here
   // don't forget to write return
   let total = 0;
   for(let i = 0 ; arrOfMarks.length > i ; i++){
    total = total + arrOfMarks[i]
   }
   const result = (total / arrOfMarks.length).toFixed(2);
   return parseFloat(result)

   }

// console.log( average([75.25, 65, 80, 35.45, 99.50]));

//! String Concatenation

function getLetter(s) {
    let letter ;
    console.log(s.charAt(0));
    // Write your code here

        switch (s.charAt(0)) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return 'A';
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
                return 'B';
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
                return 'C';             
            default:
                return 'D';
        }
    }




    // console.log(getLetter(""));

    function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
        //Write your code here
        //Must follow lowercase and uppercase
        //Don't forget to return
        //
            if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
                return "Jim"
                
            }
            if (marksOfChinku > marksOfJim && marksOfChinku > marksOfDela) {
                return "Chinku"
            }else {
                return "Dela"
            }
          
        }

        console.log(JimOrDelaOrChinku(84,  99 , 90));

        function average (arrOfMarks){
            //write your code here
           // don't forget to write return
           let total = 0;
           for(let i = 0 ; arrOfMarks.length > i ; i++){
            total = total + arrOfMarks[i]
           }
          
           return total;
        
           }
        
        console.log( average([20,13,37]));
// ---------------------------------------------------------

 function checkTriangle(side1, side2, side3) {
 if ((side1 === side2) && (side1 !== side3)  ) {
      return "Yes";
    }
    else if((side1 === side3) && (side1 !== side2)) {
        return "Yes";
    }
    else if( (side2 === side3) && (side2 !== side1)){
        return "Yes";
    }
    else {
      return "No";
    }
    
        }
 console.log(checkTriangle(9,9,9));


//!------------------------------------------

function tallestFriend ( height ) {
    //Write your code here
    //Don't forget to return

    return Math.max(...height)
    }
    console.log( tallestFriend([157,  134,  188 ]));


    //!---------------------------------------------------------------

    function hourToMin(hour){
        //write your code here
        //don't forget to write return
        return hour * 60;
        }
        console.log(hourToMin(2));


//!------------------------------------------------------------------

function findOddSum(odd){
    //write your code here
    //don't forget to write return
    let result = 0;
    for (const oddNum of odd) {


        if((oddNum % 2) !== 0){
            result = result + oddNum;
        }
    }
    return result;
    }
    console.log(findOddSum([5, 5, 10 ]));


    //!-------------------------------------------

    function secondLargest ( numbers ) {
        //Write your code here
        //Don't forget to return

        const array = numbers.sort(function(a, b){return a-b})
        const index = array.length - 2;

        return array[index];
        }
        

        console.log(secondLargest([10,33,5,99,6, 100, 110]));


//!--------------------------=--------------------------------


function countZeros ( binary_num ) {
    //Write your code here
    //Don't forget to return

    const result = binary_num.match(/0/g)
    return result.length;
    
    }


    console.log(countZeros("01010"));
//----------------------------------------------

    function findMax(max){
        //write your code here
        //don't forget to write return
          return Math.max(...max)
        }

        console.log(findMax([55,10,95]));



        const deleteProperty =(arr)=>{
            // Write your code here.
            
                let obj = arr[0];
                let prop = arr[1];
                if (obj.hasOwnProperty(prop)) {
                    delete obj[prop];
                    return "YES";
                } else {
                    return "NO";
                }
            }
            
            
// !-----------------------------------------------


function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
      };

}


// console.log(Rectangle(4,5));


// !-------------------------------------------------------------



function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }
    return count;
}

console.log(getCount([{x:1, y:1} , {x:2, y:3}]));
