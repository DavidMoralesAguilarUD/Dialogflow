'use strict'
const DialogLib=require('../../DialogLib.js');
module.exports = {
    mostrarDoctorado: function (resultado, doctorado, textoEnviar, imagenDoctorado, urlDoctorado) {
        try {
            textoEnviar = "Nombre del Doctorado: " + global.doctorados[doctorado].Nombre;
            resultado = DialogLib.addCardDoctorado(textoEnviar, doctorado,imagenDoctorado, urlDoctorado);

        } catch (error) {
            textoEnviar = "No conozco ese doctorado";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}