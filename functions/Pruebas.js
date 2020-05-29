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
DialogLib.parameters(parametros);