"use strict";
exports.__esModule = true;
var repcomputadores_1 = require("./repcomputadores");
var registro_1 = require("./registro");
var inquirer = require('inquirer');
var fechaActual = new Date();
var rxjs = require('rxjs');
function main() {
    inquirer
        .prompt([
            {
                type: 'list', name: 'Menu', message: 'Seleccione una opcion',
                choices: ['1.-Agregar Computador', '2.-Listar Computadores', '3.-Registro Computador','4.-Listar Registro','5.-Borrar', '6.-Salir']
            }
        ])
        .then(function (opcionMenu) {
            //console.log(opcionMenu.Menu);
            switch (opcionMenu.Menu) {
                case '1.-Agregar Computador':
                    console.log('1');
                    inquirer.prompt([
                        {
                            type: 'input', name: 'Id', message: 'Ingrese id computador'
                        },
                        {
                            type: 'input', name: 'Procesador', message: 'Ingrese tipo de procesador'
                        },
                        {
                            type: 'input', name: 'Memoria', message: 'Ingrese la memoria ram'
                        },
                        {
                            type: 'input', name: 'Disco_Duro', message: 'Ingrese capacidad disco duro'
                        }
                    ])
                        .then(function (respuestasNuevoComputador) {
                            var computadorNuevo = {
                                id:respuestasNuevoComputador.Id,
                                procesador: respuestasNuevoComputador.Procesador,
                                memoria: respuestasNuevoComputador.Memoria,
                                discoduro: respuestasNuevoComputador.Disco_Duro
                            };
                            repcomputadores_1.agregarComputador(repcomputadores_1.computadores,computadorNuevo);
                            console.log('Computador registrado con exito.!');

                        });

                    break;
                case '2.-Listar Computadores':
                    repcomputadores_1.listarComputador();

                    break;
                case '3.-Registro Computador':
                    
                    console.log('Escoja las caracteristicas');
                    repcomputadores_1.listarComputador();
                    inquirer.prompt([
                        {
                            type: 'input', name: 'Id', message: 'Ingrese id del computador'
                        },
                        {
                            type: 'input', name: 'Descripcion', message: 'Ingrese Descripcion del computador'
                        }
                    ]).then(function (respuestasNuevoRegistro) {
                            var nuevoRegistro = {
                                id:respuestasNuevoRegistro.Id,
                                fecha: fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear(),
                                descripcion: respuestasNuevoRegistro.Descripcion
                                };
                           // registro_1.crearRegistro1(registro_1.registrocomputador,nuevoRegistro,repcomputadores_1.listarComputador());
                            registro_1.crearRegistro(registro_1.registrocomputador,nuevoRegistro);
                            console.log('Registro registrado con exito.!');

                        });
                    break;
                case '4.-Listar Registro':
                    registro_1.listarRegistros();
                    break;
             case '5.-Borrar':
                    var leerArchivo$ = rxjs.from(lecturaArchivo("computador.json"));
                    leerArchivo$.subscribe(function (respuesta) {
                       var arreglo = respuesta.split('\n');
                        var id = arreglo.filter(function (value) {
                            if (value != '') {
                                return (JSON.parse(value)["id"] === id);
                            }
                        });
                        inquirer
                            .prompt(cancionEliminada)
                            .then(function (opcion) {
                                var leerArchivo2$ = rxjs.from(lecturaArchivo("computador.json"));
                                leerArchivo2$.subscribe(function (respuesta2) {
                                    var arreglo2 = respuesta2.split('\n');
                                    arreglo2 = arreglo2.filter(function (value) {
                                        if (value === '') {
                                        }
                                        else {
                                            if ( JSON.parse(value)["id"] === id) {
                                            }
                                            else {
                                                return value;
                                            }
                                        }
                                    });
                                    var val = "";
                                    arreglo2.forEach(function (valor) {
                                        val += valor + "\n";
                                    });
                                    rxjs.from(escribirarchivo("computador.json", val));
                                });
                            });
                    });
                    break;
                case '6.-Salir':
                    break;
            }
        });
}
main();