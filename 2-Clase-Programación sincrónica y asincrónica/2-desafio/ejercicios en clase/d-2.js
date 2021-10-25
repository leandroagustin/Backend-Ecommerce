const fs = require('fs'); //common.js
//Lectura
let fileR = fs.readFileSync('./test.txt', 'utf-8');

//Escritura (el utf-8 esta por defecto)
let fileW = fs.writeFileSync('./test.txt', 'Nuevo texto\n', 'utf-8');//Aca lo remplaza

let Boca = {
    name: "Luis Vázquez",
    number:  38
}

fs.writeFileSync('./test2.txt', JSON.stringify(Boca), 'utf-8')
//Aca lo crea, si no encuentra el archivo

fs.appendFileSync('./test.txt', 'Otro contenido\n', 'utf-8');
fs.appendFileSync('./test.txt', 'Otro contenido\n', 'utf-8');
fs.appendFileSync('./test.txt', 'Otro contenido', 'utf-8');

//Borrar archivos
fs.unlinkSync('./test2.txt');

//try catch
//Intento hacer algo(try), sino(catch) error.
try {
    fs.writeFileSync('', 'Algo', 'utf-8')
    console.log('Todo ok');
} catch (err) {
    throw err
    // throw 'Error al escribir'; // Personalizar un error
}