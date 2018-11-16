"use strict";
exports.__esModule = true;
var fs = require('fs');
var fechaActual = new Date();
exports.registrocomputador = [];
var prestamoejm = {
    fecha: fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear(),
    Descripcion: 'se cuelga la maquina'
//  fechaRecepcion: fechaActual.getDate() + '/' + (fechaActual.getMonth() + 2) + '/' + fechaActual.getFullYear()
};
exports.lecturaArchivoRegistro = new Promise(function (resolve, reject) {
    fs.readFile('registro.json', 'utf-8', function (err, contenidoArchivo) {
        if (err) {
            resolve('');
        }
        else {
            resolve(contenidoArchivo);
        }
    });
});
var escrituraArchivoRegistro = function (contenidoLeido, datosComputador) {
    return new Promise(function (resolve, reject) {
        var contenido = contenidoLeido ? contenidoLeido + datosComputador : datosComputador;
        fs.writeFile('registro.json', contenido, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(contenido);
            }
        });
    });
};
var escrituraArchivoRegistro1 = function (contenidoLeido, datosComputador,lista) {
    return new Promise(function (resolve, reject) {
        var contenido = contenidoLeido ? contenidoLeido + datosComputador : datosComputador ;
        fs.writeFile('registro.json', contenido, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(contenido);
            }
        });
    });
};
exports.crearRegistro = function (arreglosRegistro,nuevoRegistro) {
    //var nuevoRegistro=[];
    arreglosRegistro.push(nuevoRegistro);
    return new Promise(function (resolve, reject) {
        //const archivo:string = 'registro.json';
        //var archivo= 'registro.json';
        var datosRegistro = '\n' + JSON.stringify(nuevoRegistro);
        exports.lecturaArchivoRegistro
            .then(function (contenidoArchivo) {
                return escrituraArchivoRegistro(contenidoArchivo, datosRegistro);
            });
    });
};


exports.crearRegistro1 = function (arreglosRegistro,nuevoRegistro,lista) {
    //var nuevoRegistro=[];
    arreglosRegistro.push(nuevoRegistro);
    return new Promise(function (resolve, reject) {
        //const archivo:string = 'registro.json';
        //var archivo= 'registro.json';
        var datosRegistro = '\n' + JSON.stringify(nuevoRegistro);
        exports.lecturaArchivoRegistro
            .then(function (contenidoArchivo) {
                return escrituraArchivoRegistro1(contenidoArchivo, datosRegistro, lista);
            });
    });
};
exports.listarRegistros = function () {
    return new Promise(function (resolve, reject) {
        exports.lecturaArchivoRegistro
            .then(function (contenidoArchivo) {
                console.log('\n*****Registros*****\n', contenidoArchivo);
            });
    });
};