function isLeapYear (year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    {
        console.log( `${year} is leap year`)
    }
    else{
        console.log( `${year} is not leap year`)
    }
}

isLeapYear(2028)
//!________________________________________----------
/*
 Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found. 
 */
function findLeapYear(year){
    //write your code here
    //don't forget to write return
   const result = year.filter((year)=>{
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
        {
            return year;
        }
    })
    return result;

    }
    console.log(findLeapYear([2023,2024,2025,2028,2030]));