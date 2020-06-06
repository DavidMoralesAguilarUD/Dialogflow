 'use strict'
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

const DialogLib=require('./DialogLib');

// Variables Globales
global.cursos =require("./BD-CursosDiplomados.json");
const server= express();
server.use(bodyParser.urlencoded({
    extended:true
}));
server.use(bodyParser.json());
server.use("/imagenes", express.static(path.join(__dirname,'/imagenes')));
server.get('/', (req,res)=>{
    return res.json("Hola, soy un bot, pero esta no es la forma de interactuar conmigo");
});

server.post("/Bot",(req,res)=>{
    let contexto = "nada"
    let resultado;
    let textoEnviar=`recibida peticion post incorrecta`;
    let opciones=DialogLib.reducirAOcho(["Opcion_1", "Opcion_2", "Opcion_3","Opcion_4", "Opcion_5", "Opcion_6", "Opcion_7", "Opcion_8","Opcion_7", "Opcion_8"]);
    
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
        
    } else if (contexto==="curso"){
        try{
            let curso="";
            curso=req.body.queryResult.parameters.curso;
            textoEnviar="Nombre del Curso: "+ global.cursos[curso].Nombre + " Tipo:  " + global.cursos[curso].Tipo + " Descripción " + global.cursos[curso].Descripcion;
            let imagen = global.cursos[curso].Imagen;
            let url=global.cursos[curso].url;
            resultado=DialogLib.respuestaBasica(textoEnviar);
            DialogLib.addCard(resultado,curso,textoEnviar,imagen,url);

        } catch(error){
            textoEnviar="No conozco ese curso/diplomado";
            resultado=DialogLib.respuestaBasica(textoEnviar);
        }
    }else{
        resultado=DialogLib.respuestaBasica(`No hay nada que gestionar`);
    }
    DialogLib.addSuggestions(resultado, opciones);
    res.json(resultado);
});

const local=false;
if(local){
    server.listen((process.env.PORT || 8000), ()=>{
        console.log("Servidor funcionando");
    });
} else {
    exports.Bot=functions.https.onRequest(server); //http://localhost:8000
}
