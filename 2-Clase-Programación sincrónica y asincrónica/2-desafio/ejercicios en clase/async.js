// //          Forma async

const fs = require('fs'); //commonjs
// //readFile recibe dos parametros
// fs.readFile('./test.txt', 'utf-8', (err,data)=>{
//     //directamente le pasamos la data
//     if (err) throw "Error al leer";
//     console.log(data);
// });
// //writeFile recibe un parametro
// fs.writeFile('./test.txt', 'Nuevo Contenido\n', 'utf-8', (err) => {
//     if (err) throw "Error al escribir";
// });
// //appendFile recibe un parametro
// fs.appendFile('./test.txt', 'Contenido nuevo añadido','utf-8', (err) => {
//     if (err) throw "Error al añadir";
// });
// //Borrar
// fs.unlink('./test.txt', (err) => {
//     if (err) throw "Error al borrar";
// });
//Como crear una carpeta
// fs.mkdir('./test', (err, data) => {
//     if (err) throw 'Error al crear carpeta';
//     console.log(data);
// });
//Como leer una carpeta
fs.readdir('./test', (err, data) => {
    if (err) throw 'Error al leer carpeta';
    console.log(data);
    fs.writeFile('./test/testNew.txt', 'formato', 'utf-8', (err) => {
        if (err) throw "Error al crear";
        console.log('Todo OK');
    });
})