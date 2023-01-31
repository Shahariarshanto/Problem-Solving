/**
 * array sort adiabatically and 
 * copy of an array using ... spreading operator 
 */

const names = ["baan", "bbas", "dallah", "roof", "ihakim", "hman","Aaran","Aazaan"];

const news = [...names].sort();

console.log(names)
console.log(news)


const points = [40, 100, 1, 5, 25, 10];

const sortPoint = [...points].sort(function(a,b){
    return a - b;
})

console.log(points)
console.log(sortPoint)
