
var b = [
    arrOne = 1, 2, 3, 4, 5,
    arrTwo = 10, 20, 30, 40, 50,
    ArrThree = 100, 200, 300, 400, 500,
];

function printArrays(arr) {
    for (var idx=0; idx<arr.length; idx++){
        console.log(arr[idx]) //console.log whatever the value of the array is 
    }
}
printArrays(b);

//console.log() prints the messages on the console only.



//a function call is equal to whatever that function returns 
var thaiFood = 150;
var group = 4;
//calculate the bill with tip
//divide the total by 4

function tip(bill){
    // console.log(bill * 1.2)
    return bill *1.2
}
 var total = tip(thaiFood);
 console.log(total/group)




