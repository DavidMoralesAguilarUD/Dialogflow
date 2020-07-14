'use strict'
const DialogLib=require('../DialogLib');

module.exports = {
    
    mostrarDiplomado: function(resultado, diplomado, textoEnviar, imagenDiplomado,urlDiplomado){
        try {
            textoEnviar = "Nombre del diplomado: " + global.JSONdiplomados[diplomado].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado, diplomado, textoEnviar,imagenDiplomado, urlDiplomado);
            
        } catch (error) {
            textoEnviar = "No conozco ese diplomado";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }return resultado;
    }
    
       
}