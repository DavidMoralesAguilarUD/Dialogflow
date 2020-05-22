'use strict'

const DialogLib=require('./DialogLib');

DialogLib.hola('David');

let respuesta=DialogLib.respuestaBasica("Bienvenido a Dialogflow");
console.log(respuesta);
console.log(JSON.stringify(respuesta));
