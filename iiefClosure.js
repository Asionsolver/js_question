(function outer(x){
    return (function inner(y){
        console.log(x);
    })(105);
})(100);
VM2088:3 100
undefined
