const {crearArchivo} = require('../helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');



console.clear();


// const num = 10;

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));






