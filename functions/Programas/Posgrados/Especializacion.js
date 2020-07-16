'use strict'
const DialogLib = require('../../DialogLib.js');
let opcionesoft = DialogLib.reducirAOcho(["Plan de Estudios", "¿Quienes Somos?",
    "Perfil del Egresado", "Documentos", "Consejo de Carrera", "Investigación", "Aulas Virtuales", "Admisiones 2020",
    "Modalidad de Grado", "Inscripcion Electiva"]);

module.exports = {
    mostrarEspecializacion: function (resultado, especializacion, textoEnviar, imagenEspe, urlEspe) {
        try {
            textoEnviar = "Nombre de la Especialización: " + global.JSONespecializaciones[especializacion].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado, especializacion, textoEnviar, imagenEspe, urlEspe);
        } catch (error) {
            textoEnviar = "No conozco esa especializacíon";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    },
    mostrarSoftware: function (resultado, textoEnviar, especializacionsoft, keyuno, keydos, keytres, keycuatro, keycinco, keyseis) {
        try {
            textoEnviar = "Info. General: " + global.JSONespecializaciones[especializacionsoft].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            keyuno = global.JSONespecializaciones[especializacionsoft].Coordinador;
            keydos = global.JSONespecializaciones[especializacionsoft].Asistente;
            keytres = global.JSONespecializaciones[especializacionsoft].VentanillaPosgrados;
            keycuatro = global.JSONespecializaciones[especializacionsoft].Telefono;
            keycinco = global.JSONespecializaciones[especializacionsoft].Direccion;
            keyseis = global.JSONespecializaciones[especializacionsoft].Email;
            console.log(keyseis);
            DialogLib.listSelect(resultado, especializacionsoft, keyuno, keydos, keytres, keycuatro, keycinco, keyseis);
            DialogLib.addSuggestions(resultado, opcionesoft);
            //DialogLib.addCard(resultado,especializacionsoft, textoEnviar, imagenEspe, urlEspe);

        } catch (error) {
            textoEnviar = "No conozco esa especializacíon";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;
    },
    mostrarOpciones: function (resultado, info, textoEnviar, imagenEspe, urlEspe) {
        //DialogLib.addCard(resultado,especializacionsoft, textoEnviar, imagenEspe, urlEspe)
        try {
            textoEnviar = global.JSONEspeSoftware[info].Nombre;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado, info, textoEnviar, imagenEspe, urlEspe);
        } catch (error) {
            textoEnviar = "No conozco esa especializacíon";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
        return resultado;


    }
}
