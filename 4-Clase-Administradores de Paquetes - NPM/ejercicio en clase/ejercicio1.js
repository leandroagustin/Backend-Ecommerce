// Crear un script de node js que nos permite calcular la suma, resta multiplicacion, división y módulo de dos números que se pasan como argumento del script.

let params = process.argv.slice(2);

let numA = parseInt(params[0]);
let numB = parseInt(params[1]);

let sumar = numA + numB;
console.log(sumar);

let restar = numA - numB;
console.log(restar);

let multiplicar = numA * numB;
console.log(multiplicar);

let dividir = numA / numB;
console.log(dividir);
