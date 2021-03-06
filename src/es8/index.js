// Object.entries: convertir un objeto a un matriz donde los
//propiedades de objeto clave, valor se transformarán
//en un arreglo [clave,valor
const data = {
    fronted: 'Alex',
    backend: 'Migue',
    design: 'Angie',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

/*Object.values: **devuelve los valores
de un objeto convertidos en un arreglo.*/

const data = {
    fronted: 'Alex',
    backend: 'Migue',
    design: 'Angie',
}

const values = Object.values(data);
console.log(values);


//“texto”.padStart() | “texto”.padEnd()

const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, ' world'));


// async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction();