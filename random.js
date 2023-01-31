 function getRadomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const element = document.getElementById("myBtn");

element.addEventListener("click",   function(){ 

    const randomNumber = getRadomNumber(1,6)

    document.getElementById("num-output").innerHTML = randomNumber;
 })


