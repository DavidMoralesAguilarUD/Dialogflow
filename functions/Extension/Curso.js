'use strict'
const DialogLib=require('../DialogLib');
module.exports = {
    darCurso: function(resultado, curso, textoEnviar, imagenCurso,urlCurso){
        try {
            textoEnviar = "Nombre del curso: " + global.cursos[curso].Nombre;
            resultado = DialogLib.addCard2(textoEnviar, curso, imagenCurso, urlCurso);

        } catch (error) {
            textoEnviar = "No conozco ese curso";
            resultado = DialogLib.respuestaBasica(textoEnviar);
            
        }
        return resultado;
    }
}