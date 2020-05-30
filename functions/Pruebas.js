'use strict'

const DialogLib=require('./DialogLib');

DialogLib.hola('David');

let respuesta=DialogLib.respuestaBasica("Bienvenido a Dialogflow");
console.log(respuesta);
console.log(JSON.stringify(respuesta));

let opciones=["opcion_1","opcion_2", "opcion_3"];
DialogLib.addSuggestions(respuesta, opciones);
console.log(respuesta);
console.log(JSON.stringify(respuesta));

opciones =["opcion_1", "opcion_2", "opcion_3", "opcion_4", "opcion_5", "opcion_6", "opcion_7", "opcion_8", "opcion_9", "opcion_10", "opcion_11", "opcion_12"];


console.log(reducirAOcho(opciones));