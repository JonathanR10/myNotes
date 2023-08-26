
/*
let brands =  ['hp','dell','ms1','asus','apple'];

for (let i in brands )
{
    //console.log(i);
}

for (let i of brands )
{
   // console.log(i);
}

let a =3;
//console.log(!(a>2));

if(a)
{
    //console.log(a);
}

/// ###### Hoisting = mover una parte del codigo a cualquier parte para que pueda ser utilizada. Es decir, no es necesario colocar primero la declaración para llamarla.####
/// var permite usar el hoisting pero solo para la inicialización. Usando let, no permite hacerlo y el codigo se rompe. En otras palabras, si la variable se define como global
// ya sea usando let o var, se quedan como globales, pero si estan en un bloque solo var tiene opción a ese acceso.

/// ###### SCOPE = Se refiere al alcance. Global, de función, de bloque (definido entre llaves). Let tiene un scope de bloque, Var tiene un scope global


myFunction();

var testScope;
function myFunction()
{

    testScope= 'This is inside a function';
 //   console.log("this is a function");
   // console.log(testScope);
}

const myAnonymous = () => console.log('This is an arrow');

const myAnonymous2 = () =>  ({ a : 1});  // <==== opcion 2 ------------ opción 1 para retornar un objeto ====> { return { a : 1};}
console.log(myAnonymous2());

/// 
let example = 'Arrow function';

const myAnonymous3 = x => example;
console.log(myAnonymous3());

const myCallbackExecutor = (toExcecute) =>
{
    console.log('before callback');
    toExcecute('here');
}


myCallbackExecutor(param1 => console.log(param1));


// ### Closure función que se crea dentro de otra función pero que recuerda elcontexto de quien la creo aunque su ejecución ya haya terminado
// ## HO = high order


function creator(color1, color2) // HO function
{
    console.log('Inside a HO function');

    return color3 => console.log(`My favourite colors are ${color1},${color2} and ${color3}`); // interpotlación de texto
}

const closure = creator('verde','amarillo');
closure('azul');

// IIFE (Immediately Invoked Function Expression), funcinones que se invocan solas
(() => {console.log('self invoke')})();
*/
// ## 'this' invocado enuna función imprime el objeto global, 'this' invocado en función flecha solo hace referencia al objeto dentro d ela función

let fruits= ['apple', 'pineapple', 'orange', 'banana', 'pineapple', 'apple','cherry', 'avocado'];
//console.log(fruits);
// Aplicando el rayo mexicanizador con 'MAP', lo que permite modificar el valor del elemento que se selecciona
let mexicanFruit = fruits.map( element => 'mexican ' + element);
//console.log(mexicanFruit);

// ## filter

let filteredFruits = fruits.filter((fruits,index) => index >4);
//console.log(filteredFruits);


let numbers = [10,20,30,40];
let value = numbers.reduce((acum, elem) => acum +=elem,0);
//console.log(value);




let reducedArray = fruits.reduce( (accumulator, element, index) =>
{
    let attribute = element + index;
    accumulator[attribute] = element;
    return accumulator
}, 
{} ); // estatus inicial del objeto es un objeto vacio

//console.log(reducedArray);


let newFruits = fruits.filter( element => element[0] === 'a')
                      .map(element => element.toUpperCase());


//console.log(newFruits);


let foundFruit =  fruits.find(element => 
    element.length >6);

//console.log(foundFruit);


fruits.forEach( (x) =>
{
//    console.log(x);
});


// ELIMINAR ELEMENTOS REPETIDOS

const uniqueFruits = fruits.filter( (elem, index, arr) => arr.indexOf(elem) === index) // indexOf retorna el indice del primer elemento que se encuentra

//console.log(uniqueFruits);

// ########## POO
// Clases

class Persona{

    static species = 'human'; // popiedad de la clase mas no de la instancia

    #address = 'example address'; // variable privada
    // #address;
    constructor(name, age){
        this.name = name;
        this.age = age;
        //this.#address = address; //Si deseamos implementar lapropiedad addresspara que sea accesible desde el
    }

    sayHi(){
        console.log('hi,my name is', this.name);
    }

// metodo de clase
    static breath(){
        console.log('Fiuuuuuu');
    }

    get obtainAddress()
    {
        return this.#address;
    }
    set setAddress(address)
    {
        this.#address =address;
    }
}

class Mexicano extends Persona{
    constructor(curp,name){
        super(name, 25)
        this.curp = curp;
    }

    sayHi()
    {
        console.log('Quibo!!');
    }

}


const ramiro = new Persona('Ramiro Gómez', 31)
//console.log(ramiro);
//ramiro.sayHi();
//console.log(ramiro.name);
//console.log(ramiro.species); // queda como undefined ya que es un elemento d ela clase
//console.log(Persona.species);
//ramiro.breath(); // no se tiene acceso a este metodo desde la instancia ya que es propio de la clase
//Persona.breath();

//console.log(ramiro.obtainAddress);
ramiro.setAddress = 'new address';


const rodrigo = new Mexicano('ROGA258999HOIKUJM9', 'Rodrigo tavares');
rodrigo.setAddress ='England'
//console.log(rodrigo);
//console.log(rodrigo.obtainAddress);
////
//rodrigo.sayHi();
//ramiro.sayHi();

////////////


////######################################################
////##############  Asincronismo  ########################
////######################################################

// tarea asincrona es una tarea no bloquente.
// Hilo es la unidad minima de ejecución
/*
const db = ['mojo', 'dojo', 'casa', 'house'];
console.log('Before async task');
const myAsync = () => {
setTimeout(() => {
    const data = db;
    console.log(data);
}, 2000);
}

myAsync();


console.log('After async task');

*/
/*
const db = ['mojo', 'dojo', 'casa', 'house'];
console.log('Before async task');
let data;
const myAsync = (callback, callback2) => {
setTimeout(() => {
    data = db;
    callback(data, callback2)
    return data;
    
}, 2000);
}

const printData = (info, callback) => 
{
    console.log(info);
    callback();
}

const goodbye = () => console.log('Here is your data');

myAsync(printData, goodbye);

console.log('After async task');*/


//// ### Promesas : una promersa de que en algun punto de la ejecución se va a recibir un valor
// Estados: Fullfilled, Rejected y Pending
/*
const db = ['mojo', 'dojo', 'casa', 'house'];
let data;
const myAsyncP = ()=>
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = db;
            if(!data) reject('something went wrong');
            else resolve(data);
        },2000)
    })
}

myAsyncP()
        .then((response) =>
                            {
                                console.log(response);
                                return 'Ken'
                            } )
        .then((name) => {console.log('here is your data ', name);})
        .catch((err) => {console.log(err)})


*/

/*
const db = ['mojo', 'dojo', 'casa', 'house'];
let data;
const myAsyncP = ()=>
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = db;
            if(!data) reject('something went wrong');
            else resolve(data);
        },2000)
    })
}

myAsyncP()
        .then((response) =>
                            {
                                console.log(response);
                                let [a,b] = response;
                                return {a,b};
                            } )
        .then((obj) => {console.log('here is your data ', obj);})
        .catch((err) => {console.log(err)})

*/

/*
// ### <<<<<<<< ASYNC-AWAIT

const db = ['mojo', 'dojo', 'casa', 'house'];
let data;
const myAsyncAW = ()=>
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = db;
            if(!data) reject('something went wrong');
            else resolve(data);
        },2000)
    })
}

(async function () {
    const kenHouse = await myAsyncAW();
    console.log(kenHouse);
    console.log('here is your data');
})();

console.log('after data printing');

*/

/*
const fs = require('node:fs');

const t1 = fs.readFileSync('./text1.txt','utf-8')
console.log('while reading');
const t2 = fs.readFileSync('./text2.txt','utf-8')


console.log(t1);
console.log(t2);
console.log('after files');
*/

const http = require ('node:http');

const server = http.createServer((req, res) =>
{
res.writeHead(200, {'ContentType': 'txt','BobEsponja': 'Kangreburger'});
res.end('This is your body');
})


const PORT = 3000;

server.listen(PORT, () => {
    console.log('Listenig on port ', PORT);
})





