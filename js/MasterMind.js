/**
 * Script MasterMind que tiene las propiedades y el comportamiento del juego
 * 
 * 
 * 
 * @author Juan Antonio Bujalance García
 */


let MasterMind = {
    /**
     * Propiedad que contiene la combinación ganadora
     */
    combinacion: undefined,

    /**
     * Método que genera una combinación y la almacena en la propiedad combinacion
     */
    init: function () {

        let bola1 = Math.floor(Math.random() * (0 - 9) + 9);
        let bola2 = Math.floor(Math.random() * (0 - 9) + 9);
        let bola3 = Math.floor(Math.random() * (0 - 9) + 9);
        let bola4 = Math.floor(Math.random() * (0 - 9) + 9);

        this.combinacion = "" + bola1 + bola2 + bola3 + bola4;


    },

    /**
     * Muestra la combianación por consola
     * @returns combiancion
     */
    mostrar: function () {
        return this.combinacion;
    },

    /**
     * Comprueba la combinación que introduce el usuario y 
     * devuelve un array con el número de negros y blancos acertados
     * @param {intento} intento 
     * @returns comprobacion
     */
    comprobarCoincidencia: function (intento) {
        /**
         * acierto = "-2";
         * color = "-1";
         * fallo = "undefined";
         */
        let intentoArray = intento.split("");
        let comprobacion = [undefined, undefined, undefined, undefined];
        let arrayCombinacion = this.combinacion.split("");

        for (let i = 0; i < 4; i++) {
            if (intento[i] == this.combinacion[i]) {
                comprobacion[i] = -2;
                intentoArray[i] = undefined;
                arrayCombinacion[i] = undefined;
            }
        }

        for (let i = 0; i < intentoArray.length; i++) {
            if (intentoArray[i] != undefined) {
                for (let j = 0; j < arrayCombinacion.length; j++) {
                    if (intentoArray[i] == arrayCombinacion[j]) {
                        comprobacion[i] = -1;
                        arrayCombinacion[j] = undefined;
                    }
                }
            }
        }
        return comprobacion.sort();
    }
}