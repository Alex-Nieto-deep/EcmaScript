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


let lorem = 'Esta es una frase epica \n'
+ 'Otra frase epica.';

let lorem2 = `Otra frase mas epica
ahora es otra linea epica`;

console.log(lorem);
console.log(lorem2);


let persona = {
    'name': 'Alex',
    'age': 22,
    'country': 'COl'
}

console.log(persona.name, persona.age);

let { name, age } = persona;
console.log(name, age);

let team1 = ['Oscar', 'Alfred', 'Fred'];
let team2 = ['Pedro', 'Maria', 'Lina'];

let education = ['Alex', ...team1, ...team2];

console.log(education);

{
    var globalvar = 'Global var'
}

{
    let globalLet = 'Gobla let'
    console.log(globalLet);
}

console.log(globalvar);

const a = 'b';

/**
 * Parameters in Objects
 */

let name = 'Alex';
let age = 32;

//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age };

console.log(obj);
console.log(obj2);

// Arrow Functions

const names = [
    {name: 'Alex', age: 21},
    {name: 'Yesica', age: 22}
]

let listOfName = names.map( function (item) {
    console.log(item.name);
    return item.name;
})

console.log(listOfName);

let listOfName2 = names.map(item => console.log(item.name));

const square = num => num * num;
console.log(square(5));


// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (!!1) {
            resolve('Hey')
        } else {
            reject('Upps')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('correcto'))
    .catch(error => console.log(error));


//clases
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    suma(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.suma(2,2));

//modulos

import { hello } from './module';

hello();

//em5
const hello = require('./module')

console.log(hello())

// generadores


function* helloWorld() {
    if (1) { 
        yield 'hello, ';
    }
    if (1) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value) 
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

