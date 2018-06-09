// Binary Search
// Given an array of sorted numbers and a value (also a number), return whether the array contains that value. 
// Return the index position of the value if it exists and -1 if it does not exist. 

arr1 = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94]

function binarySearch(arr, value){
    var high = arr.length - 1;
    var low= 0;
    var mid= 0;
    
    while(low <= high) {
        mid = Math.floor((high+ low)/2)
        //middle == value being searched 
        if(arr[mid] == value){
            //return value
            return mid;
        }
        else if(value > arr[mid]){
            //move the low up one 
            low = mid + 1;
        }
        else{
            //move the low up one 
            high = mid -1;
        }
    }
    return -1;
}

// console.log(arr1)

// console.log(binarySearch(arr1, 5))

//if its not sorted 

// var sorted = arr1.sort( function(a,b) {return a-b});
// console.log(sorted);
// // var sorted = binarySearch(sorted, 15)

