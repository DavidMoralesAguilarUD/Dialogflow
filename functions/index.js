 'use strict'
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const menu = require('./menu.js');
const Diplomado = require('./Diplomado.js');
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
    // VARIABLES PARAMETRICAS BASICAS
    let contexto = "nada";
    let resultado;
    let textoEnviar=`recibida peticion post incorrecta`;
    let diplomado = req.body.queryResult.parameters.diplomado;
    let imagen = global.diplomados[diplomado].Imagen;
    let url = global.diplomados[diplomado].url;
    let opciones=DialogLib.reducirAOcho(["Programas", "Facultad", "Decanatura","Investigación", "Extensión", "Contactenos", "Ayuda", "Resolución 69/2018 CA"]);
    
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
        try {
            
            
            //textoEnviar = "Nombre del diplomado: " + global.diplomados[diplomado].Nombre +global.diplomados[diplomado].Descripcion;
           
            //DialogLib.respuestaBasica(textoEnviar);
            //resultado = DialogLib.addCard2(textoEnviar, diplomado, imagen, url);
           
            resultado = Diplomado.dardiplomado(res, diplomado, textoEnviar, imagen,url);
            //console.log(res);
        } catch (error) {
            textoEnviar = "No conozco ese diplomado";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
    } else if (contexto === "curso") {
        try {
            let curso = "";
            curso = req.body.queryResult.parameters.curso;
            textoEnviar = "Nombre del curso: " + global.cursos[curso].Nombre + global.cursos[curso].Tipo + " Descripción " + global.cursos[curso].Descripcion;
            let imagen = global.cursos[curso].Imagen;
            let url = global.cursos[curso].url;
            resultado = DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado, curso,imagen, url);

        } catch (error) {

            textoEnviar = "No conozco ese curso";
            resultado = DialogLib.respuestaBasica(textoEnviar);
        }
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
