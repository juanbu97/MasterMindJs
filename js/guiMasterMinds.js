/**
 * script que controla la interfaz de usuario
 * rojo blanco negro amarillo naranja marron azul verde
 * @author Juan Antonio Bujalance García 
 */
{
    let fichasCombinacion;
    let fichasSolucion;
    let intento = "";
    let combinacion;

    let colocarFicha = (event) => {
        for (const ficha of fichasCombinacion) {
            if (ficha.getAttribute("fill") == "gray") {
                ficha.setAttribute("fill", event.target.getAttribute("fill"));
                return;
            }
        }
    }

    let comprobarIntento = () => {
        let solucion;
        let aciertos = 0;
        for (const ficha of fichasCombinacion) {
            if (ficha.getAttribute("fill") == "red") {
                intento += "0"
            } else if (ficha.getAttribute("fill") == "white") {
                intento += "1"
            } else if (ficha.getAttribute("fill") == "black") {
                intento += "2"
            } else if (ficha.getAttribute("fill") == "yellow") {
                intento += "3"
            } else if (ficha.getAttribute("fill") == "orange") {
                intento += "4"
            } else if (ficha.getAttribute("fill") == "brown") {
                intento += "5"
            } else if (ficha.getAttribute("fill") == "blue") {
                intento += "6"
            } else if (ficha.getAttribute("fill") == "green") {
                intento += "7"
            }
        }
        solucion = masterMind.comprobarCoincidencia(intento);

        pintarSolucion(solucion);

        for (const i of solucion) {
            if(i == -2){
                aciertos++;
            }
        }
        

        if (aciertos === 4) {
            alert("Has ganado la partida");
        }
    }

    let pintarSolucion = (solucion) =>{
        for (let i = 0; i < solucion.length; i++) {
            if(solucion[i] === -2){
                fichasSolucion[i].setAttribute("fill", "black");
            }else if(solucion[i] === -1){
                fichasSolucion[i].setAttribute("fill", "white");
            }
        }
    }



    let init = () => {

        combinacion = masterMind.init();

        fichasCombinacion = document.getElementById("cajaCombinacion").getElementsByTagName("circle");
        fichas = document.getElementsByTagName("circle");
        fichasSolucion = document.getElementById("cajaSolucion").getElementsByTagName("circle");
        

        for (let i = 8; i < 16; i++) {
            fichas[i].addEventListener("click", colocarFicha);
        }

        document.getElementById("comprobarIntento").addEventListener("click", comprobarIntento);


    }


    document.addEventListener("DOMContentLoaded", init);
}