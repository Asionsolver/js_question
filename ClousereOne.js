function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        console.log(x+y);
    }
    
    return inner;
    x = 20;
}

var innerFunc = outer();
innerFunc();
VM2155:5 15
undefined
