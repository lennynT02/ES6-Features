//---let
// Antes de ES6
var x = 10;
// Con ES6
let y = 10;


//---const
const PI = 3.14;


//---for of
let nombres = ["Juan", "María", "Carlos"];
for(let nombre of nombres) {
    console.log(nombre);
}


//---Literales de plantilla
let nombre = "Juan";
let apellido = "Perez";
let nombreCompleto = `${nombre} ${apellido}`;


//---Valores predeterminados para parámetros de función
function saludar(nombre = "usuario") {
    console.log(`Hola, ${nombre}!`);
}
saludar("Juan"); // Output: Hola, Juan!
saludar(); // Output: Hola, usuario!


//---Funciones flecha
let suma = (a, b) => a + b;


//---Clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}.`);
    }
}
let persona1 = new Persona("Juan");
persona1.saludar(); // Output: Hola, soy Juan.


//---Módulos (requiere un entorno de ejecución compatible con módulos)
// archivo: math.js
export const PI2 = 3.14;

// archivo: main.js
import { PI } from './math.js';
console.log(PI); // Output: 3.14


//---Parametro rest
function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // Output: 10


//---Operador de propagación
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3); // Output: [1, 2, 3, 4, 5, 6]


//---Desestructuración de objetos
// Array Destructuring
let colores = ["rojo", "verde", "azul"];
let [color1, color2] = colores;
console.log(color1); // Output: rojo

// Object Destructuring
let persona = { nombre: "Juan", edad: 30 };
let { name, edad } = persona;
console.log(name); // Output: Juan


//---Cadenas de varios líneas
let mensaje = `Este es un
mensaje en varias
líneas.`;
