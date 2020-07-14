'use strict'
const DialogLib = require('../DialogLib');
module.exports = {
    mostrarDecanatura: function (resultado, decanatura, textoEnviar, imagenDeca, urlDeca) {
        try {
            textoEnviar = "información sobre: " + global.JSONDecanatura[decanatura].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,decanatura,textoEnviar, imagenDeca, urlDeca);
        } catch (error) {
            textoEnviar = "No conozco o no he aprendido inforamacin sobre eso.";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}