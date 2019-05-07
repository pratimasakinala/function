// global scope
var globalVar = 'Hello World!';

function sayHello() {
    console.log(globalVar);

    // local/function scope
    var funcVar = 'I\'m scoped inside a function.';
    console.log(funcVar);
}

sayHello();
console.log(globalVar);
// console.log(funcVar);

// block scope
if (true) {
    // let is basically var. Allows for reassignment
    // const stores a constant value only. Cannot be reassigned
    const blockVar = 'I\'m inside a block.';
    console.log(blockVar);
}
// console.log(blockVar);

function secondFunction() {
    // console.log(funcVar);
}
secondFunction();


// nested scope
function outerFunction() {
    const outer = 'I\'m defined in outerFunction.';
    console.log(outer);

    function innerFunction() {
        const inner = 'I\'m defined in innerFunction.';
        console.log(inner);
    }

    function secondFunction() {
        console.log('blah');
    }

    // innerFunction();
    // console.log(inner);

    return innerFunction;
};