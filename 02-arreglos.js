var arregloNumeros = [1, 2, 3];

arregloNumeros.push(4);

console.log(arregloNumeros);

arregloNumeros.pop();

console.log(arregloNumeros);

arregloNumeros.splice(0, 2);

console.log(arregloNumeros);

arregloNumeros.splice(1, 0, 4, 5, 6, 7, 8, 9, 10);

console.log(arregloNumeros);

var indiceNumeroSeis = arregloNumeros.indexOf(6);

arregloNumeros.splice(indiceNumeroSeis, 1);

console.log(arregloNumeros);

var arregloUno = arregloNumeros.slice(0, 3);

var arregloDos = arregloNumeros.slice(3, 7);

arregloDos.push(7);
var indiceSiete = arregloDos.indexOf(7); // Indice de la primera ocurrencia
console.log(arregloUno);
console.log(arregloDos);
console.log(indiceSiete);

// [0,10] Cerrado Esta incluido el 10
// [0,10[ Abierto Esta excluido el 10