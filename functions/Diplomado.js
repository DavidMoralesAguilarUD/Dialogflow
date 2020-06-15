'use strict'
const DialogLib=require('./DialogLib');
module.exports = {
    dardiplomado: function(resultado, diplomado, textoEnviar, imagen,url){
        textoEnviar = "Nombre del diplomado: " + global.diplomados[diplomado].Nombre;
        resultado = DialogLib.addCard2(textoEnviar, diplomado, imagen, url);
        return resultado;
       
    }

}