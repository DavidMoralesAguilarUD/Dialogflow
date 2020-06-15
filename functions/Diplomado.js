'use strict'
const DialogLib=require('./DialogLib');

module.exports = {
    
    dardiplomado: function(resultado, diplomado, textoEnviar, imagenDiplomado,urlDiplomado){
        try {
            textoEnviar = "Nombre del diplomado: " + global.diplomados[diplomado].Nombre;
            resultado = DialogLib.addCard2(textoEnviar, diplomado, imagenDiplomado, urlDiplomado);
            
        } catch (error) {
            textoEnviar = "No conozco ese diplomado";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }return resultado;
    }
    
       
}