var botonguardarpalabra = document.querySelector("#guardar");
var limite = document.querySelector("#limite");
var texto = document.querySelector("#texto");
var vacio = document.querySelector("#vacio");
var acentos = document.querySelector("#acentos");

var ingresar = document.querySelector("#ingresar");
ingresar.focus();

let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let noacentos = ["á", "é", "í", "ó", "ú", "ñ"];

botonguardarpalabra.addEventListener("click", function() {

    var errores = true;
    var palabra = ingresar.value;

    for (let i = 0; i < palabra.length; i++) {

        for (let j = 0; j < numeros.length; j++) {
            if (palabra[i].includes(numeros[j])) {
                texto.classList.remove("invisible");
                errores = false;
                break;
            } else {
                texto.classList.add("invisible");
            }
        }
    }

    for (let i = 0; i < palabra.length; i++) {

        for (let j = 0; j < noacentos.length; j++) {
            if (palabra[i].includes(noacentos[j])) {
                acentos.classList.remove("invisible");
                errores = false;
                break;
            }
        }
    }

    if (palabra.length > 8) {
        limite.classList.remove("invisible");
        errores = false;
    } else {
        limite.classList.add("invisible");
    }

    if (palabra.length <= 0) {
        vacio.classList.remove("invisible");
        limite.classList.add("invisible");
        texto.classList.add("invisible");
        errores = false;
    } else {
        vacio.classList.add("invisible");
    }

    if (errores) {
        guardarlocalstg(palabra.toUpperCase());
        window.location.href = "../juego/ahorcado.html";
    }
})

function guardarlocalstg(contenido) {
    sessionStorage.setItem("palabra", contenido);
}