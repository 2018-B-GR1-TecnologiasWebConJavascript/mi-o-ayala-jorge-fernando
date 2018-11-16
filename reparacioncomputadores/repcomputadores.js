"use strict";
exports.__esModule = true;
//const inquirer = require('inquirer');
var fs = require('fs');
exports.computadores = [];
var Computador = {
    id:'cod1',
    procesador: 'core I5',
    memoria: '4 gb ram',
    discoduro: '80 gb'

};
exports.lecturaArchivoComputador = new Promise(function (resolve, reject) {
    fs.readFile('computador.json', 'utf-8', function (err, contenidoArchivo) {
        if (err) {
            resolve('');
        }
        else {
            resolve(contenidoArchivo);
        }
    });
});
var escrituraArchivoComputador = function (contenidoLeido, datosComputador) {
    return new Promise(function (resolve, reject) {
        var contenido = contenidoLeido ? contenidoLeido + datosComputador : datosComputador;
        fs.writeFile('computador.json', contenido, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(contenido);
            }
        });
    });
};
exports.agregarComputador = function (arreglosComputador, ComputadorNuevo) {
    arreglosComputador.push(ComputadorNuevo);
    return new Promise(function (resolve, reject) {
        var archivo = 'computador.json';
        var datosComputador = '\n' + JSON.stringify(ComputadorNuevo);
        exports.lecturaArchivoComputador
            .then(function (contenidoArchivo) {
                return escrituraArchivoComputador(contenidoArchivo, datosComputador);
            });
    });
};
exports.listarComputador = function () {
    return new Promise(function (resolve, reject) {
        exports.lecturaArchivoComputador
            .then(function (contenidoArchivo) {
                console.log('\n*****Computador*****\n', contenidoArchivo);
            });
    });
};
