const yargs = require('yargs');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

yargs.command(
    'listar',
    'Imprime en consola la tabla de multiplicar',
    opts
).command(
    'crear',
    'Crear un archivo con la tabla de multiplicar',
    opts
).help();

module.exports = yargs;