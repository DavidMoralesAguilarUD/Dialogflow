 'use strict'
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

const DialogLib=require('./DialogLib');
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
    let resultado=`recibida peticion post incorrecta`;
    try{
        contexto=req.body.queryResult.action;
        resultado=`recibida peticion de accion: ${contexto}`;
    } catch(error){
        console.log("Error contexto vacio:"+error);
    }
    if(req.body.queryResult.parameters){
        console.log("parametros:"+req.body.queryResult.parameters);
    } else {
        console.log("Sin Parametros");
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
