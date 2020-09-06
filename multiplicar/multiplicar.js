//Requarieds 
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('*********************************'.red);
    console.log(`******* tabla de ${ base }*******`.green);
    console.log('*********************************'.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let CrearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`Tablas/Tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
        });
    });
}

module.exports = {
    CrearArchivo,
    listarTabla
}