'use strict'
const DialogLib=require('../../DialogLib.js');
module.exports = {
    mostrarDoctorado: function (resultado, doctorado, textoEnviar, imagenDoctorado, urlDoctorado, opciones) {
        try {
            textoEnviar = "Nombre del Doctorado: " + global.doctorados[doctorado].Nombre;
            resultado = DialogLib.addCardPosgrados(textoEnviar, doctorado,imagenDoctorado, urlDoctorado);
            DialogLib.addSuggestions(resultado, opciones);

        } catch (error) {
            textoEnviar = "No conozco ese doctorado";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}