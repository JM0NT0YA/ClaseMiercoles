let numeros =[10.34, 1, 1000, 350.23]
const varios = ["juan", true, 10, null, 3.0]
console.log(numeros);
console.log(varios)
console.log(varios[0]);
console.log(varios.length);

// Agrego al final
numeros.push("colombia");
console.log(numeros);

// Quito el ultimo
numeros.pop();

// Poner al inicio 
numeros.unshift("Brasil");
console.log(numeros);
numeros.shift();
console.log(numeros);

// Metodos para arreglos
// 1) .reduce()
let reducido = numeros.reduce((acumulador, valor_actual) => {
    return acumulador+valor_actual;
});
console.log(reducido);
// 2) .filter()
let filter = numeros.filter(dato=>{
    return dato > 10 ;
});
console.log(filter);

let string = ["colombia", " brasil", "panama"]
console.log(string.filter(datos=>{
    return datos.startsWith("col");
}));
console.log(string);

// 3 .map()
let mapeo = string.map(pais =>{
    return pais.concat(" Hola");
})
 console.log(mapeo);
let mapped = numeros.map(numero =>{
    return Math.pow(numero,2);
})
console.log(mapped);

//4 .foreach()

numeros.forEach(numero =>{
    console.log(numero);
})

// EJEMPLOS Jhon Montoya
// Utilizando el método map para convertir un arreglo de números en un arreglo de sus cuadrados
let numberss = [1, 2, 3, 4, 5];
let squares = numberss.map(num => num * num);
console.log(squares);

//Utilizando el método filter para crear un arreglo de strings que tengan una longitud mayor a 3:
let strings = ["hola", "adiós", "hola mundo", "chau"];
let longStrings = strings.filter(str => str.length > 3);
console.log(longStrings);

//Utilizando el método reduce para sumar todos los elementos de un arreglo de números
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//Utilizando el método forEach para imprimir cada elemento de un arreglo de strings
let stringss = ["hola", "adiós", "hola mundo", "chau"];
strings.forEach(str => console.log(str));
