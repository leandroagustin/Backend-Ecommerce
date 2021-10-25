const fs = require('fs');

const fechaYHora = () => {
    const fecha = new Date(); //Permite trabajar con fechas y horas.
    let Fecha = `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`;
    let Hora = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    let dateAndHour = `${Fecha} ${Hora}`;
    return dateAndHour;
}

try {
    fs.writeFileSync('./fyh.txt', `Hora y Fecha actual en Argentina: ${fechaYHora()}`, 'utf-8');
    let leerArchivo = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(leerArchivo);
} catch(err) {
    throw 'Error en la lectura';
}
