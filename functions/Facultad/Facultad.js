'use strict'
const DialogLib=require('../DialogLib');
module.exports = {
    mostrarInfoFacultad : function(resultado, facultad, textoEnviar){
        try {
            textoEnviar = "Información: " + global.JSONFacultad[facultad].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);

        } catch (error) {
            resultado = "Error";
        }
        return resultado;

    }
}