'use strict'
const DialogLib = require('./DialogLib');
module.exports = {
    mostrarSaludo: function (resultado, saludo, textoEnviar, imagenbot) {
        try {
            textoEnviar = "Hola, soy tu ChatBot Virtual UD. ¿Quieres conocer informacion sobre nuestros servicios?";
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCardHello(resultado, saludo, textoEnviar, imagenbot);

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
            textoEnviar="¿Deseas ver más información? ó vuelvamos a dialogar";
            resultado=DialogLib.respuestaBasica(textoEnviar);
        
        } catch (error) {
            resultado = "Error";
        }
        return resultado;
    },
    mostrarNegacion : function(resultado, textoEnviar){
        try {
            textoEnviar="Bueno!!, espero que te haya podido ayudar con la información proporcionada, deseo volverte a ver en un futuro.";
            resultado=DialogLib.respuestaBasica(textoEnviar);
        } catch (error) {
            resultado = "Error";
        }
        return resultado;
    }
}
    

