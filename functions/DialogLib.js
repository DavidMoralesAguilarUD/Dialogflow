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
function addSuggestions(res, opciones) {
    res.fulfillmentMessages.push({
        "platform": "ACTIONS_ON_GOOGLE",
        "suggestions": {
            "suggestions": OptionsListGoogle(opciones)
        }
    });
}
function OptionsListGoogle(opciones) {
    let res = [];
    for (let i = 0; i < opciones.length; i++) {
        res.push({ "title": opciones[i] })
    }
    return res;
}

function addCard(res, titulo, texto, imagen, url) {
    res.fulfillmentMessages.push(
        {
            "platform": "ACTIONS_ON_GOOGLE",
            "basicCard": {
                "image": {
                    "title": titulo,
                    "subtitle": titulo,
                    "formattedText": texto,
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
function listSelect(res, titulo, keyuno, keydos, keytres, keycuatro, keycinco, keyseis) {
    res.fulfillmentMessages.push(
        {
            "platform": "ACTIONS_ON_GOOGLE",
            "listSelect": {
                "title": "Informacion General: " + titulo,
                "items": [
                    {
                        "info": {
                            "key": keyuno
                        },
                        "title": "Coordinador: " + keyuno,
                    },
                    {
                        "info": {
                            "key": keydos
                        },
                        "title": "Asistente: " + keydos,
                        "image": {}
                    }, {
                        "info": {
                            "key": keytres
                        },
                        "title": "Ventanilla Posgrados: " + keytres,
                        "image": {}
                    }, {
                        "info": {
                            "key": keycuatro
                        },
                        "title": "Telefono: " + keycuatro,
                        "image": {}
                    }, {
                        "info": {
                            "key": keycinco
                        },
                        "title": "Direccion: " + keycinco,
                        "image": {}
                    }, {
                        "info": {
                            "key": keyseis
                        },
                        "title": "Email: " + keyseis,
                        "image": {}
                    }
                ]
            }
        });
}
function reducirAOcho(opciones) {
    let res = [];
    let i = 0;
    let pos;
    while (i < 3 & opciones.length > 0) {
        pos = Math.floor(Math.random() * opciones.length);
        res.push(opciones[pos]);
        opciones.splice(pos, 1);
        i++;
    }
    return res;

}
function addCardHello(res,titulo, texto, imagen) {
    res.fulfillmentMessages.push(
        {
            "platform": "ACTIONS_ON_GOOGLE",
            "basicCard": {
                "image": {
                    "title": titulo,
                    "imageUri": imagen,
                    "accessibilityText": texto
                } 
            }
        });
}

module.exports = {
    respuestaBasica: respuestaBasica,
    addSuggestions: addSuggestions,
    reducirAOcho: reducirAOcho,
    addCard: addCard,
    listSelect: listSelect,
    addCardHello: addCardHello
}