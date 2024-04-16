is_string = function (input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;
};

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

/**
@Documenation
The Object.prototype.toString() method returns a string representing the object. This method is usually called internally by JavaScript and not explicitly in code. It is used to detect the type of the object. The Object.prototype.toString() method returns a string representing the object.

call() method calls a function with a given this value and arguments provided individually.
*/


// In javascript, each built-in type has its own toString method. For an array, that would return all of the array values joined with a comma

const arr = [1,2,3,4,5]
console.log(arr.toString()) // returns "1,2,3,4,5"
console.log(Object.prototype.toString.call(arr)) // returns [object Array]

// The toString function for Object (the built-in type for objects) happens to return what type of object it is as a string with the format [object Type]. So for example:
const str = 'test'
console.log(str.toString() )// returns 'test'
console.log(Object.prototype.toString.call(str)) // returns "[object String]"



// console.log(arr.toString().split(',')) // returns ["1", "2", "3", "4", "5"]
// console.log(arr.toString().split(',').join('')) // returns "12345"