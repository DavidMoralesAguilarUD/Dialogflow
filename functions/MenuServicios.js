'use strict'
const DialogLib=require('./DialogLib');
module.exports = {
    mostrarSaludo: function(resultado, textoEnviar){
        try {
            textoEnviar="Hola, soy tu ChatBot Virtual UD. ¿Quieres conocer informacion sobre nuestros servicios?";
            resultado= DialogLib.respuestaBasica(textoEnviar);
        } catch (error) {
            resultado = "Error";
        }
        return resultado;
    },
    mostrarSugerencia: function(resultado, textoEnviar){
        try {
            textoEnviar="Aqui tienes algunas sugerencias. Nota: escríbelas tambien si te apatece.";
            resultado=DialogLib.respuestaBasica(textoEnviar);
        } catch (error) {
            resultado = "Error";
        }
        return resultado;

    },
    mostrarOtraSugerencia : function(resultado, textoEnviar){
        try {
            textoEnviar="¿Deseas oberservar mas informacion?";
            resultado=DialogLib.respuestaBasica(textoEnviar);
        } catch (error) {
            resultado = "Error";
        }
        return resultado;
    },
    mostrarNegacion : function(resultado, textoEnviar){
        try {
            textoEnviar="Vale, será para la próxima ocasión.";
            resultado=DialogLib.respuestaBasica(textoEnviar);
        } catch (error) {
            resultado = "Error";
        }
        return resultado;
    }
}
    

