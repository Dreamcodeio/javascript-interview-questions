/*
+---------+-------------+-----------+--------------+---------+-----+
| Keyword | Reasignable | Inmutable | Redeclarable | Scope   | TDZ |
+---------+-------------+-----------+--------------+---------+-----+
| var     | Si          | No        | Si           | Función | No  |
+---------+-------------+-----------+--------------+---------+-----+
| let     | Si          | No        | No           | Bloque  | Si  |
+---------+-------------+-----------+--------------+---------+-----+
| const   | No          | No        | No           | Bloque  | Si  |
+---------+-------------+-----------+--------------+---------+-----+
*/

//Asignación
var nombre1 = "Bill";
let nombre2 = "Steve";
const nombre3 = "Elon";

nombre1 = "Bill Gates";
nombre2 = "Steve Jobs";
//nombre3 = "Elon Musk";

//Inmutabilidad
var persona1 = {nombre: "Bill"};
let persona2 = {nombre:"Steve"};
const persona3 = {nombre: "Elon"};

persona1.apellido = "Gates";
persona2.apellido = "Jobs";
persona3.apellido = "Musk";

console.log( persona1.nombre + " "+persona1.apellido);
console.log( persona2.nombre + " "+persona2.apellido);
console.log( persona3.nombre + " "+persona3.apellido);

// persona3 = {}






