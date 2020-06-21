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

function addCard(res, titulo, imagen, url) {
    res.fulfillmentMessages.push(
        {
            "platform": "ACTIONS_ON_GOOGLE",
            "basicCard": {
                "image": {
                    "imageUri": imagen,
                    "accessibilityText": titulo
                },
                "buttons": [
                    {
                        "title": `Más info. ${titulo}`,
                        "openUriAction": {
                            "uri": url
                        }
                    }
                ]
            }
        });
}
function reducirAOcho(opciones){
    let res = [];
    let i = 0;
    let pos;
    while (i<4&&opciones.length>0){
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
function addCard2(textoEnviar, titulo, imagen, url) {
    let respuesta = {
        "fulfillmentText": textoEnviar,
        "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "basicCard": {
                    "title": titulo, 
                    "formattedText": textoEnviar,
                    "image": {
                        "imageUri": imagen,
                        "accessibilityText": titulo
                    },
                    "buttons": [
                        {
                            "title": `Más info. ${titulo}`,
                            "openUriAction": {
                                "uri": url
                            }
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
function addCardDoctorado(textoEnviar, titulo, imagen,url){
    let respuesta = {
        "fulfillmentText": textoEnviar,
        "fulfillmentMessages": [
            {
                "platform": "ACTIONS_ON_GOOGLE",
                "basicCard": {
                    "title": titulo, 
                    "formattedText": textoEnviar,
                    "image": {
                        "imageUri": imagen,
                        "accessibilityText": titulo
                    },
                    "buttons": [
                        {
                            "title": `Más info. ${titulo}`,
                            "openUriAction": {
                                "uri": url
                            }
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



module.exports = {
    hola: hola,
    respuestaBasica: respuestaBasica,
    addSuggestions: addSuggestions,
    reducirAOcho: reducirAOcho,
    addCard: addCard,
    addCard2: addCard2,
    addCardDoctorado: addCardDoctorado
}