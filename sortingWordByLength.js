// sorting words by length in sentence by ascending order

// input

const sentence = "I love to much JavaScript";

// output: "JavaScript love I"

function sortingWordByLength(sentence){
    
        // convert sentence to array
        let array = sentence.split(" ");
    
        // ! sort the array by length by ascending order
        let result = array.sort((a,b)=>{
            return a.length - b.length;
        });

        // ! sort the array by length by descending order
        // let result = array.sort((a,b)=>{
        //     return b.length - a.length;
        // });

    
        // return the result
        return result.join(" ");
    }

console.log(sortingWordByLength(sentence));

console.log(sentence)

