'use strict'
const DialogLib = require('../DialogLib');

module.exports = {

    mostrarInvestigacion: function(resultado, investigacion, textoEnviar, imagenInvestigacion,urlInvestigacion){
        try {
            textoEnviar = "Inverstigación:" + global.JSONinvestigacion[investigacion].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,investigacion,textoEnviar, imagenInvestigacion, urlInvestigacion);

        } catch (error) {
            resultado = "Error";
        }
        return resultado;

    }
}