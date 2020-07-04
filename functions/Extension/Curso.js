'use strict'
const DialogLib=require('../DialogLib');
module.exports = {
    mostrarCurso: function(resultado, curso, textoEnviar, imagenCurso,urlCurso){
        try {
            textoEnviar = "Nombre del curso: " + global.cursos[curso].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,curso,textoEnviar, imagenCurso, urlCurso);

        } catch (error) {
            textoEnviar = "No conozco ese curso";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    }
}