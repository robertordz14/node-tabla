const argv = require('yargs')
                    .option('b', {
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Numero a multiplicar'
                    })
                    .option('l', {
                        alias:'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra desplegada la tabla'
                    })
                    .option('h', {
                        alias:'hasta',
                        type: 'number',
                        demandOption: false,
                        describe: 'Limite de multiplicacion'
                    })
                    .check((argv, options)=>{
                        if (isNaN(argv.b)) {
                            throw ('La base tiene que ser un valor numerico')
                        }
                        return true;
                    })
                    .argv;

module.exports= argv;
