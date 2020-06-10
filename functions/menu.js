'use strict'
const DialogLib=require('./DialogLib');
module.exports = {
    daropciones: function(textoEnviar,resultado){
        textoEnviar="Segundo Saludo";
        resultado=DialogLib.respuestaBasica(textoEnviar);
        return textoEnviar, resultado;
    }
   
}
    

