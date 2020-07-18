'use strict'
//Variables Constantes
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MenuServicios = require('./MenuServicios.js');
const Diplomado = require('./Extension/Diplomado.js');
const Curso = require('./Extension/Curso.js');
const Doctorado = require('./Programas/Posgrados/Doctorado.js');
const Maestria = require('./Programas/Posgrados/Maestria.js');
const DialogLib = require('./DialogLib');
const Especializacion = require('./Programas/Posgrados/Especializacion.js');
const Decanatura = require('./Decanatura/Decanatura.js');
const Facultad = require('./Facultad/Facultad.js');
const Universidad = require('./Facultad/Universidad.js');
const Pregrado = require('./Programas/Pregrado/Pregrado.js');
const { globalAgent } = require('http');
const Investigacion = require('./Investigacion/Investigacion.js');
global.JSONimagenes = require("./Imagenes/JSONimagenes.json");
// Variables Globales Estructura Academica
global.JSONdiplomados = require("./Extension/BD-Diplomado.json");
global.JSONcursos = require("./Extension/BD-Curso.json");
global.JSONdoctorados = require("./Programas/Posgrados/BD-Doctorado.json");
global.JSONmaestrias = require("./Programas/Posgrados/BD-Maestrias.json");
global.JSONespecializaciones = require("./Programas/Posgrados/BD-Especializacion.json");
global.JSONEspeSoftware = require("./Programas/Posgrados/BD-EspecialzizacionSoft.json");
global.JSONinvestigacion = require("./Investigacion/BD-Investigacion.json");
// Variables Globales Estructura Administrativa
global.JSONDecanatura = require("./Decanatura/BD-Decanatura.json");
global.JSONUniversidad = require("./Facultad/BD-Universidad.json");
global.JSONFacultad = require("./Facultad/BD-Facultad.json");
global.JSONPregrado = require('./Programas/Pregrado/BD-Pregrados.json');
let server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
server.use("/imagenes", express.static(path.join(__dirname, '/imagenes')));
server.get('/', (req, res) => {
    return res.json("Hola, soy un bot, pero esta no es la forma de interactuar conmigo");
});

server.post("/Bot", (req, res) => {

    let contexto = "nada";
    let resultado;
    let textoEnviar = `recibida peticion post incorrecta`;

    // VARIABLES PARAMETRICAS (INTENCIONES) BASICAS
    // SALUDO

    //SUGERENCIAS
    let opciones = DialogLib.reducirAOcho(["Maestria - Telecomunicaciones Móviles", "Especialización en Avaluos ",
        "Bioingeniería", "Maestria: Ingeniería Industrial", "Doctorado", "Python", "Diplomado en Telesalud"]);
    // DOCTORADO
    let doctorado;
    let imagenDoctorado;
    let urlDoctorado;
    // MAESTRIA
    let maestria;
    let imagenMaestria;
    let urlMaestria;
    // ESPECIALIZCIÓN
    let especializacion;
    let especializacionsoft;
    let keyuno, keydos, keytres, keycuatro, keycinco, keyseis;
    let imagenEspe;
    let urlEspe;
    // DIPLOMADO
    let diplomado;
    let urlDiplomado;
    let imagenDiplomado;
    // CURSO
    let curso;
    let imagenCurso;
    let urlCurso;
    // DECANATURA
    let decanatura;
    let imagenDeca;
    let urlDeca;
    // FACULTAD
    let facultad;
    let universidad;
    // PREGRADO
    let pregrado;
    let info;
    let imageninfo;
    let urlInfo;
    // INVESTIGACION
    let investigacion;
    let imagenInvest;
    let urlInvest;

    let saludo;
    let imagenbot;

    // Cuando no hay nada en la variable textoEnviar dentro del contexto
    try {
        contexto = req.body.queryResult.action;
        textoEnviar = `recibida peticion de accion: ${contexto}`;
    } catch (error) {
        console.log("Error contexto vacio:" + error);
    }
    if (req.body.queryResult.parameters) {
        console.log("parametros:" + req.body.queryResult.parameters);
    } else {
        console.log("Sin Parametros");
    }
    ///////////////////////////////////////////////////////////////////////////////

    /*   if(contexto === "prueba"){
          if(prueba = req.body.queryResult.parameters.prueba){
              resultado = MenuServicios.mostrarSaludo(res, textoEnviar);
          }else {
              console.log("Error");
          }
          */
    ////// Bienvenida //////
    if (contexto === "saludo") {
        if ((saludo = req.body.queryResult.parameters.saludo)) {
            imagenbot = global.JSONimagenes[saludo].Imagen;
            resultado = MenuServicios.mostrarSaludo(res,saludo,textoEnviar,imagenbot);
            console.log(resultado);
        }else {
            console.log("Error");
        }
    } else if (contexto === "afirmacion") {
        resultado = MenuServicios.mostrarSugerencia(res, textoEnviar);
        DialogLib.addSuggestions(resultado, opciones);
    } else if (contexto === "negacion") {
        resultado = MenuServicios.mostrarNegacion(res, textoEnviar);
        //-----------------------intenciones --------------------------------------//
    } else if (contexto === "sugerencia") {
        resultado = MenuServicios.mostrarSugerencia(res, textoEnviar);
    } else if (contexto === "otrasugerencia") {
        resultado = MenuServicios.mostrarOtraSugerencia(res, textoEnviar);
    } else if (contexto === "sisugerencia") {
        resultado = MenuServicios.mostrarSugerencia(res, textoEnviar);
    } else if (contexto === "nosugerencia") {
        resultado = MenuServicios.mostrarNegacion(res, textoEnviar);
    } else if (contexto === "diplomado") {
        if ((diplomado = req.body.queryResult.parameters.diplomado)) {
            imagenDiplomado = global.JSONdiplomados[diplomado].Imagen;
            urlDiplomado = global.JSONdiplomados[diplomado].url;
            resultado = Diplomado.mostrarDiplomado(res, diplomado, textoEnviar, imagenDiplomado, urlDiplomado);

        } else {
            console.log("Error");
        }

    } else if (contexto === "curso") {
        if ((curso = req.body.queryResult.parameters.curso)) {
            imagenCurso = global.JSONcursos[curso].Imagen;
            urlCurso = global.JSONcursos[curso].url;
            resultado = Curso.mostrarCurso(res, curso, textoEnviar, imagenCurso, urlCurso);
        } else {
            console.log("Error");
        }
    } else if (contexto === "doctorado") {
        if ((doctorado = req.body.queryResult.parameters.doctorado)) {
            imagenDoctorado = global.JSONdoctorados[doctorado].Imagen;
            urlDoctorado = global.JSONdoctorados[doctorado].url;
            resultado = Doctorado.mostrarDoctorado(res, doctorado, textoEnviar, imagenDoctorado, urlDoctorado, opciones);
        } else {
            console.log("Error");
        }

    } else if (contexto === "maestria") {
        if ((maestria = req.body.queryResult.parameters.maestria)) {
            imagenMaestria = global.JSONmaestrias[maestria].Imagen;
            urlMaestria = global.JSONmaestrias[maestria].url;
            resultado = Maestria.mostrarMaestria(res, maestria, textoEnviar, imagenMaestria, urlMaestria);

        } else {
            console.log("Error");
        }
    } else if (contexto === "especializacion" | contexto === "especializacionsoft") {
        if ((especializacion = req.body.queryResult.parameters.especializacion)) {
            imagenEspe = global.JSONespecializaciones[especializacion].Imagen;
            urlEspe = global.JSONespecializaciones[especializacion].url;
            resultado = Especializacion.mostrarEspecializacion(res, especializacion, textoEnviar, imagenEspe, urlEspe);
        } else if ((especializacionsoft = req.body.queryResult.parameters.especializacionsoft)) {
            if ((especializacionsoft === "Ingeniería Software")) {
                resultado = Especializacion.mostrarSoftware(res, textoEnviar, especializacionsoft, keyuno, keydos, keytres, keycuatro, keycinco, keyseis);
            } else {
                console.log("Error");
            }
        } else {
            console.log("Error");
        }
    } else if (contexto === "info") {
        if ((info = req.body.queryResult.parameters.info)) {
            imageninfo = global.JSONEspeSoftware[info].Imagen;
            urlInfo = global.JSONEspeSoftware[info].url;
            resultado = Especializacion.mostrarOpciones(res, info, textoEnviar, imageninfo, urlInfo);
            console.log(info);
        } else {
            console.log("Error");
        }
    } else if (contexto === "decanatura") {
        if ((decanatura = req.body.queryResult.parameters.decanatura)) {
            imagenDeca = global.JSONDecanatura[decanatura].Imagen;
            urlDeca = global.JSONDecanatura[decanatura].url;
            resultado = Decanatura.mostrarDecanatura(res, decanatura, textoEnviar, imagenDeca, urlDeca);
        } else {
            console.log("Error");
        }
    } else if (contexto === "facultad" || contexto === "universidad") {
        if ((facultad = req.body.queryResult.parameters.facultad)) {
            resultado = Facultad.mostrarInfoFacultad(res, facultad, textoEnviar);
        } if ((universidad = req.body.queryResult.parameters.universidad)) {
            resultado = Universidad.mostrarInfoUniversidad(res, universidad, textoEnviar);
        } else {
            console.log("Error");
        }
    } else if (contexto === "pregrado") {
        if ((pregrado = req.body.queryResult.parameters.pregrado)) {
            resultado = Pregrado.mostrarPregrado(res, pregrado, textoEnviar);
        } else {
            console.log("Error");
        }
    } else if (contexto === "investigacion") {
        if ((investigacion = req.body.queryResult.parameters.investigacion)) {
            imagenInvest = global.JSONinvestigacion[investigacion].Imagen;
            urlInvest = global.JSONinvestigacion[investigacion].url;
            resultado = Investigacion.mostrarInvestigacion(res, investigacion, textoEnviar, imagenInvest, urlInvest);

        } else {
            console.log("Error");
        }

    } else {
        resultado = DialogLib.respuestaBasica(`No te entiendo. Inicia la conversacion`);
    }
    res.json(resultado);
});
const local = false;
if (local) {
    server.listen((process.env.PORT || 8000), () => {
        console.log("Servidor funcionando");
    });
} else {
    exports.Bot = functions.https.onRequest(server); //http://localhost:8000
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/* exports.Bot = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
}) */