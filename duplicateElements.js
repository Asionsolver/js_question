// count duplicate elements in an array


// input
const fruits = ["🍎", "🍊", "🥭","🍍","🍏","🍎","🍇","🍉","🥭","🍉","🍎","🍉","🍑", "🥭","🍑","🍇","🍌","🍑","🍓","🥭"];

// output:  { '🍎': 3, '🍊': 1, '🥭': 4, '🍍': 1, '🍏': 1, '🍇': 2, '🍉': 3, '🍑': 3, '🍓': 1, '🍌': 1 }

function countDuplicateElements(array){

    // create an empty object
    let result = {};

    // logic to count duplicate elements

    // ! for each element in the array

    // array.forEach((item)=>{
    //     if(result[item]){
    //         result[item] += 1;
    //     }else{
    //         result[item] = 1;
    //     }
    // })

    // ! map method to count duplicate elements

    array.map((item)=>{
        result[item] = (result[item] || 0) + 1;
    });

   // return the result
    return result;
}

console.log(countDuplicateElements(fruits)); 