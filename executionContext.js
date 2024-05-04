// function  sayName(){
//     var name  = 'someName';
//     console.log('The name is, ',name);
// }

console.log('Inside global execution context.');

var a = 5;

function testMe(){
    console.log('Inside testMe execution context.');

    var b = 10;

    var user = {
        name: 'John',
        age: 30
    }

    function testAgain(){
        console.log('Inside testAgain execution context.');
        console.log('Exiting testAgain execution context.');
    }

    testAgain();
    console.log('Exiting testMe execution context.');
}

testMe();
console.log('Exiting global execution context.');