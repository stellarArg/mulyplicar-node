// requires
const colors = require('colors/safe');
const { argv } = require('./config/yargs');
const { crearArchivo, listaTabla } = require('./multiplicar');


let comando = argv._[0];
const { base, limite } = argv;

switch (comando) {
    case 'listar':
        listaTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite).then(
            archivo => console.log('Archivo creado ', colors.green(archivo))
        ).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no definido');
}