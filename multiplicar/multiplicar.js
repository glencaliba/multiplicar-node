const fs = require('fs');
const colors = require('colors/safe');

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${ i * base }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    })
};


let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`=========tabla de ${base} =========`.green)
    console.log('=================='.green)
    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${ i * base }`);
    }
};


module.exports = {
    crearArchivo,
    listarTabla
}