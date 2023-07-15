// reverse word in a string

// input: "I love JavaScript"

// output: "I evol tpircSavaJ"

const string = "I love JavaScript";

function reverseWord(string){
    
        // convert string to array
        let array = string.split(" ");
    
        // reverse each word in the array
        let result = array.map((item)=>{
            return item.split("").reverse().join("");
        });
    
        // return the result
        return result.join(" ");
    }

console.log(reverseWord(string));