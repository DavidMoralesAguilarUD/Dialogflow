'use strict'
const DialogLib = require('../DialogLib');
module.exports = {
    mostrarDecanatura: function (resultado, decanatura) {
        try {
            resultado = global.JSONDecanatura[decanatura].Nombre;
        } catch (error) {
            textoEnviar = "";
        }
        return resultado;
    }
}