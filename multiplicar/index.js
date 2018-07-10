// requires
const fs = require('fs');
const colors = require('colors');

const listaTabla = (base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`La base introducida ${base} no es un numero`);
    } else if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} no es un numero`);
    }
    console.log('================================='.green);
    console.log(`========= tabla del ${base}`.green);
    console.log('================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

const crearArchivo = async(base, limite = 10) => {
    let data = '';

    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un numero`);
    } else if (!Number(limite)) {
        throw new Error(`El limite introducido ${limite} no es un numero`);
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/table-${base}-limite-${limite}.txt`, data, err => {
        if (err) throw err;
    });
    return `table-${base}-limite-${limite}.txt`;
}

module.exports = {
    crearArchivo,
    listaTabla
}