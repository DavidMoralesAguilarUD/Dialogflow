'use strict'
const DialogLib = require('../../DialogLib.js');
module.exports = {
    mostrarPregrado: function (resultado,pregrado,textoEnviar) {
        try {
            textoEnviar = "Pregrado:" + global.JSONPregrado[pregrado].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);

        } catch (error) {
            resultado = "Error";
        }
        return resultado;

    }

}