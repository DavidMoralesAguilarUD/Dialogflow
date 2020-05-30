function respuestaBasica(textoEnviar) {
    let respuesta = {
        "fulfillmentText": textoEnviar,
        "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "simpleResponses": {
                    "simpleResponses": [
                        {
                            "textToSpeech": textoEnviar
                        }
                    ]
                }
            },
            {
                "text": {
                    "text": [
                        textoEnviar
                    ]
                }
            }
        ]
    }
    return respuesta;
}
function addSuggestions(res, opciones){
    res.fulfillmentMessages.push({
        "platform": "ACTIONS_ON_GOOGLE",
        "suggestions": {
            "suggestions": OptionsListGoogle(opciones)
        }
    });
}
function OptionsListGoogle(opciones){
    let res=[];
    for(let i=0; i<opciones.length;i++){
        res.push({"title": opciones[i]})
    }
    return res;
}

function reducirAOcho(opciones){
    let res = [];
    let i = 0;
    let pos;
    while (i<8&&opciones.length>0){
        pos=Math.floor(Math.random()*opciones.length);
        res.push(opciones[pos]);
        opciones.splice(pos, 1);
        i++;
    }
    return res;
    
}
function hola(nombre) {
    console.log("Encantado de conocerte " + nombre);
}
module.exports = {
    hola: hola,
    respuestaBasica: respuestaBasica,
    addSuggestions: addSuggestions,
    reducirAOcho: reducirAOcho
}