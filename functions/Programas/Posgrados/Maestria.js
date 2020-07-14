'use strict'
const DialogLib=require('../../DialogLib.js');
module.exports = {
    mostrarMaestria : function(resultado, maestria, textoEnviar, imagenMaestria, urlMaestria){
        try {
            textoEnviar = "Nombre de la Maestría: " + global.JSONmaestrias[maestria].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado, maestria,textoEnviar, imagenMaestria, urlMaestria);

        } catch (error) {
            textoEnviar = "No conozco esa maestria";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }

        return resultado;
    } 
}