function newFunction(name, age, country) {
    var name = name || 'alex';
    var age = age || 22;
    var country = country || 'COl';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'alex', age = 22, country = 'COl'){
    console.log(name, age, country);
}

newFunction2();

let hello = 'Hello';
let world = 'world';
let epicPhase = hello + ' ' + world;
console.log(epicPhase);
let epicPhase2 = `${hello} ${world}`;
console.log(epicPhase2);