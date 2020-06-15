'use strict'
const DialogLib=require('./DialogLib');
module.exports = {
    daropciones: function(resultado, textoEnviar){
        textoEnviar="Segundo Saludo";
        resultado=DialogLib.respuestaBasica(textoEnviar);
        return resultado;
    }
   
}
    

