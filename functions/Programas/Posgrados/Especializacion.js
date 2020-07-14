'use strict'
const DialogLib=require('../../DialogLib.js');
module.exports = {
    mostrarEspecializacion : function(resultado, especializacion, textoEnviar, imagenEspe, urlEspe){
        try {
            textoEnviar = "Nombre de la Especialización: " + global.JSONespecializaciones[especializacion].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,especializacion, textoEnviar, imagenEspe, urlEspe);
        } catch (error) {
            textoEnviar = "No conozco esa especializacíon";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    },
    mostrarSoftware : function(resultado,especializacionsoft, textoEnviar, imagenEspe, urlEspe){
        try {
            textoEnviar = "Software tiene:"  + global.JSONespecializaciones[especializacionsoft].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,especializacionsoft, textoEnviar, imagenEspe, urlEspe);
            
        } catch (error) {
            textoEnviar = "No conozco esa especializacíon";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}
