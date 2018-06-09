// Coin Change
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. 
// Use dollars, quarters, dimes, nickels, and pennies.
// Example: coinChange(312) returns 
// {dollars: 3, dimes: 1, pennies: 2}
//Using Dynamic Programming?

function coinChange(x) {
    var change = []

    if (x >= 100) {
        change.push({'coin': 'Dollars', 'amount': Math.floor(x / 100)})
        x %= 100
    }
    if (x >= 25) {
        change.push({'coin': 'Quarters', 'amount': Math.floor(x / 25)})
        x %= 25
    }
    if (x >= 10) {
        change.push({'coin': 'Dimes', 'amount': Math.floor(x / 10)})
        x %= 10
    }
    if (x >= 5) {
        change.push({'coin': 'Nickels', 'amount': Math.floor(x / 5)})
        x %= 5
    }
    if (x >= 1) {
        change.push({'coin': 'Pennies', 'amount': x})
    }
    var s = 'You need '
    for(var i = 0; i < change.length; i++){
        s += change[i].amount + " " + change[i].coin + ", "
    }
    s = s.trim()
    s = s.split(', ')
    s.splice(s.length - 1,0, 'and')
    s = s.join(' ')
    s = s.replace(/.$/, '.')
    return s
}

console.log(coinChange(576))