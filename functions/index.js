'use strict'
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const menu = require('./menu.js');
const Diplomado = require('./Diplomado.js');
const Curso =require('./Curso.js');
const DialogLib= require('./DialogLib');

// Variables Globales
global.diplomados=require("./BD-Diplomado.json");
global.cursos=require("./BD-Curso.json"); 
let server= express();
server.use(bodyParser.urlencoded({
    extended:true
}));
server.use(bodyParser.json());
server.use("/imagenes", express.static(path.join(__dirname,'/imagenes')));
server.get('/', (req,res)=>{
    return res.json("Hola, soy un bot, pero esta no es la forma de interactuar conmigo");
});

server.post("/Bot",(req,res)=>{
    
    let contexto = "nada";
    let resultado;
    let textoEnviar=`recibida peticion post incorrecta`;
    let opciones=DialogLib.reducirAOcho(["Programas", "Facultad", "Decanatura","Investigación", "Extensión", "Contactenos", "Ayuda", "Resolución 69/2018 CA"]);
    // VARIABLES PARAMETRICAS (INTENCIONES) BASICAS
    // DIPLOMADO
    let diplomado; 
    let urlDiplomado;
    let imagenDiplomado; 
    // CURSO
    let curso; 
    let imagenCurso;
    let urlCurso;
    // VARIABLES DE LOS ARCHVOS JSON
    
    /* let imagenCurso = '';
    ; */
   
    /* ; */
    // Cuando no hay nada en la variable textoEnviar dentro del contexto
    try{
        
        contexto=req.body.queryResult.action;
        textoEnviar=`recibida peticion de accion: ${contexto}`;
    } catch(error){
        console.log("Error contexto vacio:"+error);
    }
    
    
    if(req.body.queryResult.parameters){
        console.log("parametros:"+req.body.queryResult.parameters);
    } else {
        console.log("Sin Parametros");
    }

    if (contexto==="input.welcome"){
        textoEnviar="Hola, soy tu ChatBot Virtual UD D";
        resultado=DialogLib.respuestaBasica(textoEnviar);
    } else if  (contexto==="menu"){
        resultado=DialogLib.respuestaBasica("Esta en el menu principal de serivicios");
        DialogLib.addSuggestions(resultado, opciones);
    
    } else if (contexto==="Hola"){
        resultado = menu.daropciones(res);
    }else if (contexto === "diplomado") {
        if (diplomado =req.body.queryResult.parameters.diplomado){
            imagenDiplomado= global.diplomados[diplomado].Imagen;
            urlDiplomado = global.diplomados[diplomado].url;
            resultado = Diplomado.dardiplomado(res, diplomado, textoEnviar, imagenDiplomado,urlDiplomado);
        } else {
            console.log("Error")
;        }
        
    } else if (contexto === "curso") {
        if(curso = req.body.queryResult.parameters.curso){
            imagenCurso = global.cursos[curso].Imagen;
            urlCurso = global.cursos[curso].url
            resultado = Curso.darCurso(res, curso, textoEnviar, imagenCurso, urlCurso);
        }else {
            console.log("Error")
;        }
        
    }else{
        resultado=DialogLib.respuestaBasica(`No hay nada que gestionar`);
    }
     res.json(resultado);
}); 
const local=true;
if(local){
    server.listen((process.env.PORT || 8000), ()=>{
        console.log("Servidor funcionando");
    });
} else {
    exports.Bot=functions.https.onRequest(server); //http://localhost:8000
} 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/* exports.Bot = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
}) */