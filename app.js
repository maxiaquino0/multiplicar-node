const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// console.log('limite', argv.limite);