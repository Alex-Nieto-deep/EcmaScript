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