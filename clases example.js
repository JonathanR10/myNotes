function Persona(name, age)
{
    this.name = name;
    this.age = age;
}

Persona.prototype.height = 1.81;
Persona.prototype.sayHi = function (){ console.log('Hi!!!!!!');}
const ramiro = Object.create(Persona.prototype); /// prototype se refiere almodelo para crear objetos
ramiro.name = 'Ramiro gómez';
ramiro.age = 31;

console.log(ramiro);
console.log(ramiro.__proto__); // proto se refiere a partir de qué objeto se creo
ramiro.sayHi();

const elisa = new Persona('Elisa martinez',25);
console.log(elisa);