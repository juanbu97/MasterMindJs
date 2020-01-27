/**
 * Script MasterMind que tiene las propiedades y el comportamiento del juego
 * 
 * 
 * 
 * @author Juan Antonio Bujalance García
 */


masterMind = (function () {

    let combinacion;

    let init = () => {
        combinacion = "" + generarAleatorio() + generarAleatorio() + generarAleatorio() + generarAleatorio();
    }

    let generarAleatorio =() => {
        return aleatorio = Math.floor(Math.random() * (0 - 8) + 8);
    };

    let mostrar = () =>{
        return combinacion;
    }

    let comprobarCoincidencia =(intento)=>{
        let intentoArray = intento.split("");
        let comprobacion = [undefined, undefined, undefined, undefined];
        let arrayCombinacion = combinacion.split("");

        for (let i = 0; i < 4; i++) {
            if (intento[i] == combinacion[i]) {
                comprobacion[i] = -2;
                intentoArray[i] = undefined;
                arrayCombinacion[i] = undefined;
            }
        }


        for (let i = 0; i < intentoArray.length; i++) {
            if (intentoArray[i] != undefined) {
                if(arrayCombinacion.indexOf(intentoArray[i]) != -1){
                    arrayCombinacion[arrayCombinacion.indexOf(intentoArray[i])] = undefined;
                    comprobacion[i] = -1;
                }
            }
        } 
        return comprobacion.sort((a, b) => a - b);
    }

    return{
        init: init,
        mostrar: mostrar,
        comprobarCoincidencia: comprobarCoincidencia
        
    };

})();