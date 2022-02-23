// ARMADOR DE PRESUPUESTOS

let nombre = ""
let cant = 0
let fTamaño = 0
let fModif = 0
let resumen = [];


function saludar() {
    /* if (document.getElementById('saludar').value == "" || document.getElementById('saludar').value > 0 ){

        document.getElementById('mensaje').innerHTML="Correcto";
    }    */
    Swal
        .fire({
            title: "Ingrese su nombre",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            inputValidator: nombre => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena
                
                if (nombre == "" || nombre > 0) {
                    return "Por favor escribe tu nombre";
                } else {
                    return undefined;
                }
            }
        })
        .then(resultado => {
            if (resultado.value) {
                let nombre = resultado.value;  // guardo valor en variable
                Swal.fire(`Bienvenido: ${nombre}`) //cartel utilozando variable
                let name = document.getElementById("name"); //guardo valor del id del html en una variable para trabajar aca
                name.innerHTML = `Su nombre es ${nombre}`;// uso inner para insertarlo en cartel sweet
                let nombreCliente = {//creo variable para guardar en arrary?
                    name: nombre,
                }
                resumen.splice(0, 1, nombreCliente)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
            if (resultado.value == undefined) {
                let nombre = resultado.value;
                let name = document.getElementById("name");
                name.innerHTML = `Su nombre es ${nombre}`;
                let nombreCliente = {
                    name: nombre,
                }
                resumen.push(nombreCliente);
                localStorage.setItem("resumen", JSON.stringify(resumen))

            }

        });


}


function tamaño() {

    let elecTamaño = 0
    Swal
        .fire({
            title: 'Cual es la magnitud de la modificacion a realizar',
            input: 'select',
            inputOptions: {
                'uno': 'De 20 a 40mts',
                'dos': 'De 40 a 50mts',
                'tres': 'Mas de 50mts',
            },
            inputPlaceholder: 'Seleccione un tamaño',
            inputValidator: elecOpTam => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena

                //valor tamaño elegido para sumar
                let agregoMt = 0
                let tamArtisti = 0
                let esp = 0

                switch (elecOpTam) {
                    case 'uno':
                        elecTamaño = 5000// sumarlo
                        tamElec = "Chico"
                        break;
                    case 'dos':
                        elecTamaño = 12000
                        tamElec = "Mediano"
                        break;
                    case 'tres':
                        elecTamaño = 18000
                        tamElec = "Grande"
                        break;
                }

                return new Promise(function (resolve, reject) {
                    if (elecOpTam != undefined) {

                        resolve()

                    } else {
                        reject('Seleccione una opcion)')
                    }
                })


            }

        })
        .then(resultado => {
            if (resultado.value) {
                fTamaño = elecTamaño;
                newTam = tamElec;
                Swal.fire(`Tamaño elegido: ${newTam}`)
                let tam = document.getElementById("tam");
                tam.innerHTML = `Su tamaño elegido es de ${newTam}`;
                let tamMod = {
                    tamaño: fTamaño,// guardo valor de lo elegido en $$           
                }
                resumen.splice(1, 1, tamMod)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
            if (resultado.value == undefined) {
                fTamaño = elecTamaño;
                newTam = tamElec;
                Swal.fire(`Tamaño elegido: ${newTam}`)
                let tam = document.getElementById("tam");
                tam.innerHTML = `Su tamaño elegido es de ${newTam}`;
                let tamMod = {
                    tamaño: fTamaño,
                }
                resumen.push(tamMod)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
        });
}

function modificacion() {

    /*
    const co= localStorage.getItem('resumen')
    const comp= JSON.parse(co)
    const comps= comp[1].tamaño
    console.log(comps)
    console.log(co)
    console.log(comp)
    */
   

    Swal
        .fire({

            title: 'Que tipo de modificacion desea realizar',
            input: 'select',
            inputOptions: {
                'uno': 'Artistico',
                'dos': 'Standard (Mobiliario,Luminaria,Pintura)',
                'tres': 'Duro (Standard + Obra)',
            },
            inputPlaceholder: 'Seleccione un tipo de modificacion',
            inputValidator: electModificacion => {
        
                switch (electModificacion) {


                    case 'uno':

                        pintura = 40000
                        valorTotalModif = pintura //PARA SUMA TOTAL SACO ESTA VARIABLE              
                        tipoElec= 'Artistico'  
                        break;         

                    case 'dos':

                        pintura= 60000
                        valorTotalModif = pintura //PARA SUMA TOTAL SACO ESTA VARIABLEE*/
                        tipoElec= 'Standard (Mobiliario,Luminaria,Pintura)'
                        break;
                    case 'tres':

                        pintura= 60000
                        duro= 50000
                        tipoElec= 'Duro (Standard + Obra)'
                        valorTotalModif = pintura + duro
                        break;
                }

                return new Promise(function (resolve, reject) {
                    if (electModificacion != undefined) {

                        resolve()

                    } else {
                        reject('Seleccione una opcion)')
                    }
                })


            }

        })
        .then(resultado => {
            if (resultado.value) {
                fModif = valorTotalModif;
                newModif = tipoElec;
                Swal.fire(`Modificacion elegida: ${newModif}`)
                let tip = document.getElementById("tip");
                tip.innerHTML = `Su tipo de modificacion elegida es ${newModif}`;
                let tipoMod = {
                    tipo: fModif,// guardo valor de lo elegido en $$           
                }
                resumen.splice(2, 1, tipoMod)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
            if (resultado.value == undefined) {
                fModif = valorTotalModif;
                newModif = tipoElec;
                Swal.fire(`Modificacion elegida: ${newModif}`)
                let tip = document.getElementById("tip");
                tip.innerHTML = `Su tipo de modificacion elegida es ${newModif}`;
                let tipoMod = {
                    tipo: fModif,// guardo valor de lo elegido en $$           
                }
                resumen.push(tipoMod)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
    {}        });

}


function sumarTotal() {

    const co= localStorage.getItem('resumen');
    const comp= JSON.parse(co);
    const t= comp[1].tamaño
    const m= comp[2].tipo
    console.log(t)
    console.log(m)
    const sumaTotal= t + m
    
    
    Swal.fire(`El monto total aproximado es ${sumaTotal}`) //cartel utilozando variable
                
          
}
    

let button = document.getElementById('testButton');
let button1 = document.getElementById('testButton1');
let button2 = document.getElementById('testButton2');
let button3 = document.getElementById('testButton3');

button.addEventListener('click', saludar);
button1.addEventListener('click', tamaño);
button2.addEventListener('click', modificacion);
button3.addEventListener('click', sumarTotal);


/* button2.addEventListener('click', saludar);
button3.addEventListener('click', saludar); */

//inserto mensaje luego de la realizacion del presupuesto
/* function final (){
const fin = document.createElement("p");
fin.innerHTML = "Gracias por realizar tu presupuesto, animate al cambio!";
document.getElementById("testButton").appendChild(fin);
} */
