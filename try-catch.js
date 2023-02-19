
    // TODO:   reverseString function

    function reverseString(s) {
        try {
            s = s.split("").reverse().join("");
        } catch (e) {
            console.log(e.message);
        } finally {
            console.log(s);
        }
    }
    

        // console.log(reverseString(1234));


function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

console.log(isPositive(20));
