// Braces Valid
// Given a string, write a function that will determine whether the braces  
// - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. 
// That means that any braces within other braces must close before the outer set closes.

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

var bracesValid = function (str) {
    var stack = []; //create a stack
    //create two object maps
    var open = { '{': '}', '[': ']', '(': ')' };
    // declare our open parenthese as keys and closed parentheses as values
    var closed = { '}': true, ']': true, ')': true };
    //object with closed parentheses as keys and true as the values
    if(typeof str !== typeof ""){
        return false;
    }
    for (var i = 0; i < str.length; i++) { //ititerate through the characters of the string
        var b = str[i];
        if (open[b]) {
            stack.push(b);
        }
        else if (closed[b]) {
            if (open[stack.pop()] !== b)
                return false;
        }
    }
    // return an equality comparison between the stack length and 0 
    return stack.length === 0; //if the stack is 0 this means we have looped
    //through the whole input string and we can assume it is a balanced string

};

console.log(bracesValid('[(ch)]{}'));

console.log(bracesValid('var fiddle = function() { doggy.eat();'));
console.log(bracesValid('This()Gay[shit]['));
console.log(bracesValid(15));

