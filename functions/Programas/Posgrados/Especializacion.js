'use strict'
const DialogLib=require('../../DialogLib.js');
module.exports = {
    mostrarEspecializacion : function(resultado, especializacion, textoEnviar, imagenEspe, urlEspe){
        try {
            textoEnviar = "Nombre de la Especialización: " + global.especializaciones[especializacion].Nombre + global.especializaciones[especializacion].Telefono ;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,especializacion, textoEnviar, imagenEspe, urlEspe);
        } catch (error) {
            textoEnviar = "No conozco esa maestria";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}
