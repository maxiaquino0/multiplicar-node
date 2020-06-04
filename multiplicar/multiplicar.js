const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido de base no es un número');
            return;
        }

        let tabla = '';

        for (let index = 1; index <= limite; index++) {
            tabla += `${ base } * ${ index } = ${ base * index }\n`;
        }

        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${ base }.txt`.green);
        });

    });
}

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido de base no es un número');
            return;
        }

        if (!Number(limite)) {
            reject('El valor introducido de limite no es un número');
            return;
        }

        let tabla = '';

        for (let index = 1; index <= limite; index++) {
            tabla += `${ base } * ${ index } = ${ base * index }\n`;
        }
        console.log('===================='.green);
        console.log(`Tabla del ${ base }`.green);
        console.log('===================='.green);
        console.log(`${ tabla }`.yellow);
    });
}

module.exports = {
    crearArchivo,
    listar
}