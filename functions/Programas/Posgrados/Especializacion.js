'use strict'
const DialogLib=require('../../DialogLib.js');
module.exports = {
    mostrarEspecializacion : function(resultado, especializacion, textoEnviar, imagenEspe, urlEspe){
        try {
            textoEnviar = "Nombre de la Especialización: " + global.especializaciones[especializacion].Nombre;
            resultado = DialogLib.addCardPosgrados(textoEnviar, especializacion, imagenEspe, urlEspe);
        } catch (error) {
            textoEnviar = "No conozco esa maestria";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}
