const http = require('http');
const moment = require('moment');

let server = http.createServer((req, res) => {
    let start = moment().format("hh:mm:ss")
    console.log(start);
    res.end('Hola mundo');
    if (req.url === '/') {
        res.end('Hola mundo');
    }
    if (res.url === '/fyh') {
        res.end('Buenas noches');
    } 
    return res.end('Buenas noches');
});

server.listen(3002, () => {
    console.log('server run on port 3002');
});