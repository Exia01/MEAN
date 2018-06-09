// Fizz Buzz
// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:
// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number

x = 100;
function fizzbuzz(x) {
    if (typeof x == typeof "" ) {
        return false;
    }
    for (var i = 0; i < x; i++) {
        if (i % 3 == 0 && i % 5 !== 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0 && i % 3 !== 0) {
            console.log("Buzz")
        }
        else if (i >= 15 && i % 15 == 0) {
            console.log("FizzBuzz")
        }
        else if (i <= 0) {
            return "parameter must be positive number"
        }
        else
            console.log(i);
    }

}

console.log(fizzbuzz(x));