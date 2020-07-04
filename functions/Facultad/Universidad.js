'use strict'
const DialogLib=require('../DialogLib');
module.exports = {
    mostrarInfoUniversidad: function (resultado, universidad, textoEnviar) {
        try {
            textoEnviar = "Información: " + global.JSONUniversidad[universidad].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);

        } catch (error) {
            resultado = "Error";
        }
        return resultado;

    }
}