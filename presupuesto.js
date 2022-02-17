// SELECCIONAR OPCIONES DE TRABAJO A REALIZAR 
/*CANTIDAD DE ESPACIOS A MODIFICAR(TAMAÑO, TIPO DE MODIFICACION, 

DEL TAMAÑO:
-ESPACIO CHICO HASTA 20MTS2 - PRECIO  5 LUCAS
-ESPACIO MEDIANO DE 20 A 40MTS2 - PRECIO 12 LUCAS
-ESPACIO GRANDE MAS DE 50MTS2 - DE 15 PARA ARRIBA CON UN AGREGADO DE 2% CADA MT2

DEL TIPO DE MODIFICACION:
-ARTISTICO - BAJA 40MIL, MEDIA 80, GRANDE 160 CON AGREGADO DEL 10% X MT2
-STANDARD (MOBILIARIO, LUMINARIA, PINTURA) SE SELECCIONARA SI REALIZA PINTURA (B 10, M20, G40),LUMIINARIA O MOBILIARIO
-DURO (STANDARD + ALBAÑILERIA) SE INCLUYE EL ITEM ALBAÑILERIA COLOCANDO EL PRECIO PROMEDIO DE DIA DE TRABAJO ALBAÑILERIA

DE LA CALIDAD DEL PRODUCTO X UNIDAD:
-BAJA (PRECIO PROMEDIO)
-MEDIA (AUMENTO DEL 30/40%)
-ALTA (AUMENTO DEL 50/60%)

DE LA CANTIDAD DE PRODUCTOS POR ESPACIO:
- DE 5 A 10
- DE 11 A 15
- DE 16 A 20

*/


// ARMADOR DE PRESUPUESTOS

let nombre = ""
let cant = 0
let electCantidad = 0
let electCalidad = 0

let fTamaño = 0
let fModif = 0
let fCal = 0
let agregoMt = 0
let espacio = 0


/* PRUEBA CON SWEETALERT2

function saludar() {
    
    Swal
    .fire({
        title: "Tu nombre",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        inputValidator: nombre => {
            // Si el valor es válido, debes regresar undefined. Si no, una cadena
            if (!nombre) {
                return "Por favor escribe tu nombre";
            } else {
                return undefined;
            }
        }
    })
    .then(resultado => {
        if (resultado.value) {
            let nombre = resultado.value;

            Swal.fire({
                text: "Bienvenido " + nombre + " al simulador de DECODEGA!",
            })
        }
    });
}*/


function tamaño() {
    do {

        <input type="text" id="texto" />
        let valor = document.getElementById("texto").value;


        alert("Que tipo de modificacion desea realizar?")
        elecOpTam = prompt("Presione 1. 20 a 40mts, 2. 40 a 50mts, 3. Mas de 50mts")
        let elecTamaño = 0 //valor tamaño elegido para sumar
        let agregoMt = 0
        let tamArtisti = 0
        let esp = 0

        switch (elecOpTam) {
            case '1':
                alert("Elijio espacio CHICO")
                elecTamaño = 5000// sumarlo 
                esp = 1
                break;
            case '2':
                alert("Elijio espacio MEDIANO")
                elecTamaño = 12000
                esp = 2
                break;
            case '3':
                alert("Elijio espacio GRANDE")
                agregoMt = prompt("Por favor indique los mts2 totales a modificar, se agregara un 2% al precio por mts2 adicional")
                esp = 3
                while (agregoMt < 49) {
                    agregoMt = prompt("Debe colocar mas de 49mts2, por favor vuelva a escribir")
                }
                tamArtisti = (agregoMt * 500) //SUMA ARTISTICO
                elecTamaño = (300 * agregoMt) //CUENTA TAMAÑO
                break;

            default:
                alert("No ingreso una opcion correcta")
        }
        fTamaño = elecTamaño
        espacio = esp

    } while (elecOpTam < 1 || elecOpTam > 3 || elecOpTam == "")

    return fTamaño, espacio, agregoMt
}



function modificacion() {

    do {
        alert("Que tipo de modificacion va a realizar?")
        let valorTotalModif = 0
        electModificacion = prompt("Presione 1. ARTISTICO 2.STANDARD (MOBILIARIO, LUMINARIA, PINTURA) 3.DURO (STANDARD + ALBAÑILERIA)")
        let duro = 0
        let pintura = 0
        let tamArtisti = 0
        let artistica = 0
        let selector = espacio
        switch (electModificacion) {
            case '1':
                alert("Elijio modificacion ARTISTICA")

                if (selector == 1) {
                    artistica = 40000 //mod 1
                } else if (selector == 2) {
                    artistica = 80000
                } else if (selector == 3) {
                    artistica = (160000 + tamArtisti) //SELECCION PARA ARTISTICO
                    tamArtisti = (agregoMt * 500) //SUMA ARTISTICO    
                }
                valorTotalModif = artistica //PARA SUMA TOTAL SACO ESTA VARIABLE                
                break;

            case '2':
                alert("Elijio modificacion STANDARD")

                if (selector == 1) {
                    pintura = 10000 //mod 2
                } else if (selector == 2) {
                    pintura = 20000 //mod 2
                } else if (selector == 3) {
                    pintura = (40000 + tamArtisti) // SELECCION PINTURA STANDARD    
                }
                valorTotalModif = pintura //PARA SUMA TOTAL SACO ESTA VARIABLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                break;
            case '3':
                alert("Elijio modificacion DURO")

                if (selector == 1) {
                    pintura = 10000 //mod 2
                    duro = (3000 * 10)
                } else if (selector == 2) {
                    pintura = 20000 //mod 2
                    duro = (3000 * 15)
                } else if (selector == 3) {
                    pintura = (40000 + tamArtisti) // SELECCION PINTURA STANDARD    
                    duro = (3000 * 20)
                }
                valorTotalModif = pintura + duro
                break;
            default:
                alert("No ingreso una opcion correcta")
        }

        fModif = valorTotalModif

    } while (electModificacion < 1 || electModificacion > 3 || electModificacion == "")

    return fModif;
}

console.log(fModif)

function calidad() {
    let cal = 0
    do {
        alert("Que calidad de materiales desea seleccionar para realizar las modificaciones?")

        let electCalidad = prompt("Presione 1. STANDARD 2.MEDIA 3.ALTA")

        switch (electCalidad) {
            case '1':
                alert("Elijio calidad STANDARD")
                cal = 1
                break;
            case '2':
                alert("Elijio calidad MEDIA")
                cal = 2
                break;
            case '3':
                alert("Elijio calidad ALTA")
                cal = 3
                break;
            default:
                alert("No ingreso una opcion correcta")
        }
    } while (electCalidad < 0 & electCalidad > 4)

    return fCal = cal
}

function cantidad() {
    do {
        alert("Que cantidad de productos por espacio desea seleccionar?")

        let electCantidad = prompt("Presione 1. De 5 a 10 2. De 11 a 15 3. De 16 a 20")

        switch (electCantidad) {
            case '1':
                cant = " 5 a 10 productos"
                break;
            case '2':
                cant = " 11 a 15 productos"
                break;
            case '3':
                cant = " 16 a 20 productos"
                break;
            default:
                alert("No ingreso una opcion correcta")
        }
    } while (electCantidad < 0 && electCantidad > 4)
}

function sumarTotal() {

    valorFinal = fTamaño + fModif

    if (fCal == 2) {
        valorFinal = valorFinal + ((valorFinal * 30) / 100)
    }
    if (fCal == 3) {
        valorFinal = valorFinal + ((valorFinal * 50) / 100)
    }

    alert("El monto total de lo solicitado es un aproximado de " + valorFinal + "$")

}

// para unir con html
function presupuesto(){

    saludar()
    tamaño()
    modificacion()
    calidad()
    cantidad()
    sumarTotal()
    final()

}

let button = document.getElementById('testButton');

button.addEventListener('click', presupuesto);

//inserto mensaje luego de la realizacion del presupuesto
function final (){
const fin = document.createElement("p");
fin.innerHTML = "Gracias por realizar tu presupuesto, animate al cambio!";
document.getElementById("testButton").appendChild(fin);
}