const argv = require('./config/yargs').argv;
const colors = require('colors');

const { CrearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Achivo creado: ${ archivo }`.blue))
            .catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido.');
}