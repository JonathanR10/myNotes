/*
console.log('Hola Mundo');
console.error("** Error **");
console.group("This is my group");
    console.log("print 1");
    console.log("print 2");
console.groupEnd();
    console.log("This os out of the group");

// uso de global y globalThis
//console.log(globalThis);

// Variables
var a;
console.log(a); // Undefined
a =12;
console.log(typeof a);
console.log(a);
a = 'hola';
console.log(typeof a);

// imprimir variables

console.log('this is a variable ' + a);

console.log('this is a variable', a);

console.log(`This is a variable ${a}`);

// constantes
const b =15;
// b=12; // genera un error al modificar la constante, lo arroja en el stack
*/
let c= 'This is using let';
/*
console.log(c);
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.charAt(5));

let slicedString = c.slice(1,8); // el parametro end no es el indice al que llega, el limite superior no se toca

console.log(c);
console.log(slicedString);

let modifiedString = c.replace('s','x'); // Solo reemplaza la primer coincidencia , si se requieren encontrar todas hay que usar REGEX
console.log(modifiedString);

let modifiedString2 = c.replace(/s/g,'x'); // Solo reemplaza la primer coincidencia , si se requieren encontrar todas hay que usar REGEX
console.log(modifiedString2);

console.log(c.charCodeAt(0)); // convierte el index seleccionado a ASCCI

let splitted =c.split('');
console.log(splitted);

console.log(splitted.join(''));

// interpolación de variables

console.log(`This is c in lowercase ${c.toLowerCase()} and its length ${c.length}`);
*/

/*
let mynumber = 15.3432342;
let mySecondNumber = 12.9789897;
let sum = mynumber + mySecondNumber;
console.log(sum);
sum = 28.5;
console.log(Math.round(sum));
console.log(Math.floor(sum));console.log(32.213215464654564.toFixed(3));
console.log(31.0.toFixed(3));

console.log(typeof mynumber);

mynumber = '12';
console.log(typeof mynumber);
console.log(2 + Number(mynumber)); // Cast directo

let pi = Math.PI;
console.log(pi);
console.log(parseInt(pi));

console.log(2 ** 8);
console.log(Math.abs(-4));

let pi2= '3.1416';

console.log(parseFloat(pi2));
console.log(typeof parseFloat(pi2));
console.log(typeof pi2);

let toCast = 'Hola Amigos';
console.log(Number(toCast)); // Not A Number (NaN) no tira el programa solo manda la indicación
*/
// Bool

/*
let myBoolean= true;
console.log(Number(true));
console.log(Boolean('Hola'));

let myNull = null;
console.log(typeof myNull);
console.log(Boolean(myNull));

*/
/*
// Si se quiere iterear algun elemento fuera de la longitud de los arrays no tira el programa
let myArray = [12,'Hola', [1,2], -9.1221]
console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]);

console.log(myArray.push('end'));
console.log(myArray.unshift('start'));
console.log(myArray);

let Era1 = myArray.pop();
let Era2 = myArray.unshift()
console.log(myArray, Era1, Era2);

// El primner criterio para ordenar un arreglo es en string, si no se indicq que se va a ordernar de otra formar el primer es string
// myArray = [5,2,8,1000, [1,3], 10];
// console.log(myArray.sort());

console.log(myArray.indexOf('Hola')); // -1 es que el elemento no se encontro

console.log(myArray.indexOf([1,2]));

let myNewArray = myArray;

myNewArray.push("new Data")

console.log(myArray);

myNewArray = [...myArray]; // spread operator es para copiar los valores de un arreglo a otro, no a la dirección de memoria
myNewArray.push('More data');
console.log(myNewArray);
console.log(myArray);

myNewArray = Array.from(myArray);
console.log(myNewArray);
myNewArray = myArray.slice(); // otra forma de asignar un array a otro por valor
console.log(myNewArray);

console.log(myArray.includes('Hola'));
console.log(myArray.includes('Hola '));

let myNewArray3 = [12,'Hola', [1,2], -9.1221]
let x = myNewArray3.splice(2,0,'Im Here');
console.log(myNewArray3);
console.log(x);
x = myNewArray3.splice(4,2);
console.log(x);
console.log(myNewArray3);

// splice (index, amount_to_Erase, element)
// primero borra el elemento en el index 1 y luego lo agrega en el indice 1
myNewArray3.splice(1,1,'data');
*/
//////////////////////// objects

let pc = {
    proccessor : 'i7',
    gpu: 3050,
    ram: '16 GB',
    1: 9
};

//console.log(pc);
//console.log(pc.gpu);
//console.log(pc['proccessor']); // atributo explicito
//console.log(proccessor); // haciendo referencia al contenido de la variable 
/*
// Agregando atrributos:
pc.ssd = '1 TB';
pc['psu'] = "800 W";
let attrName = 'price'
pc[attrName]  = '$32000'

// Modificando atributos
pc.ram = '32GB';
//console.log(pc);

// computed object

pc.ventilacion = { 
    fan1 : "120mm",
    fan2 : '140mm'
};

console.log(pc);
console.log(pc.ventilacion);

delete pc.psu;
console.log(pc);

// copia de valores
let newPC = {... pc}; // Hace la copia por valor del primer nivel de atributos, el segundo nivel como lo son los ventiladores los copia por referencia
console.log('********** NEW PC');
console.log(newPC);

pc.ventilacion.fan1 = 140;
console.log(newPC);

// Estructuras de control
/*
// IF
if(){

}else if()
{

}
else{

}

// condicion ? si_TRUE : Si_FALSE

//
while (condicion){

}

// do-while

do{

}while(condicion)

// switch

switch(variable){
    case valor1: 
        break
    case valor2:
        break;
    default:
}
*/

console.log(5 == '5'); // true
console.log(5 === '5'); // false (modo estricto)
/*
// funciones

// Sintaxis 
function nameF(param1, param2){

    return data
}
*/

function f1(param1, param2){
return {param1,param2}
}
function f_1(param1 = 34, param2){
    return {param1,param2}
    }

let obj = f1('hola', 'mundo');
console.log(obj);

let {param2} = f1('hola','mundo');
console.log(param2);

let {param2 :myparam} = f1('hola','mundo');
console.log(myparam);

// Si una función tiene un valor por default y queremos enviar un valor para el 
// segundo parametro, al primer valor se le manda un undefined 
let obj2 = f_1(undefined, 5);
console.log(obj2);

// función anonima ( no tiene nombre y se asigna normalmente a una variable)

const f2 = function (param1){
    console.log(param1);
}

f2('adios');


// Callback: función que se pasa como argumento a otra función y se ejecuta en cierto momento dentro de la otra funcion


function myfunction (parameter5){
    console.log('antes del CB');
    parameter5(100); // si esta vacio indica undefined dado que no hay parametro asignado para la función
    console.log('despues del CB');
}

myfunction(f2);

myfunction(function (a)
{
    console.log( a +5)
});






























