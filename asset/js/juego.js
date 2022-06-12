//matriz con palabras
let palabras = ["AMOR", "LETRA", "ALURA", "JAVASCRIPT", "BACKEND", "HTML", "ORACLE", "AMISTAD", "COMPUTADORA", "PROGRAMAR", "TRELLO", "CUMPLIDO", "OBJETIVO", "CELULAR", "INTERNET", "PASAJE", "OPCIONES", "RESPETO", "CODIGO", "GITHUB", "FIGMA"];

var ahorcado = document.querySelector("#ahorcado");
var pincel = ahorcado.getContext("2d");
var textos = document.querySelector("#lineas");
var lineas = textos.getContext("2d");

var letras = [];
var contadorerrores = 0;
var contadoraciertos = 0;

function crearPalabra() {
    var palabrasecreta = (palabras[(Math.floor(Math.random() * (palabras.length)))]);
    return palabrasecreta;
}

var ingresarPalabra = datos();


if (ingresarPalabra == null) {

    palabrasecreta = crearPalabra();
    dibujarlineas(palabrasecreta);
    logicahorca(palabrasecreta);

} else {

    palabras.push(ingresarPalabra);
    palabrasecreta = crearPalabra();
    dibujarlineas(palabrasecreta);
    logicahorca(palabrasecreta);

}