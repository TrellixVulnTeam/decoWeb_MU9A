// ARMADOR DE PRESUPUESTOS

let nombre = ""
let cant = 0
let fTamaño = 0
let fModif = 0
let fCal= 0
let resumen = [];
let tipoElec = ""
let tipoCal= ""




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
                

                (nombre == "" || nombre > 0) ? "Por favor escribe tu nombre" : undefined
/*
                if (nombre == "" || nombre > 0) {
                    return "Por favor escribe tu nombre";
                } else {
                    return undefined;
                }*/
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

                switch (elecOpTam) {
                    case 'uno':
                        elecTamaño = 5000
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
                    
                    elecOpTam != undefined ? resolve() : reject('Seleccione una opcion)')
                    
                    /*
                    if (elecOpTam != undefined) {

                        resolve()

                    } else {
                        reject('Seleccione una opcion)')
                    }*/
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

    let valorTotalModif = 0

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
        
                const co= localStorage.getItem('resumen')
                const comp= JSON.parse(co)
                const comps= comp[1].tamaño
                

                switch (electModificacion) {
                
                case 'uno':

                    comps == 5000 && (artistica = 40000)
                    comps == 12000 && (artistica = 80000)
                    comps == 18000 && (artistica = 160000)

                    /*
                    if (comps == 5000) {
                        artistica = 40000 //mod 1
                    } else if (comps == 12000) {
                        artistica = 80000
                    } else if (comps == 18000) {
                        artistica = (160000) //SELECCION PARA ARTISTICO   
                    }*/
                    tipoElec= 'Artistico'
                   valorTotalModif = artistica //PARA SUMA TOTAL SACO ESTA VARIABLE                
                   console.log(valorTotalModif) 
                   break;
    
                case 'dos':
    
                    comps == 5000 && (pintura = 10000)
                    comps == 12000 && (pintura = 20000)
                    comps == 18000 && (pintura = 40000)
                    tipoElec= 'Standard (Mobiliario,Luminaria,Pintura)'
                    valorTotalModif = pintura 
                    
                    break;
                case 'tres':
                        
                    comps == 5000 && ((pintura = 10000) && (duro = 3000*10))
                    comps == 12000 && ((pintura = 20000) && (duro = 3000*15))
                    comps == 18000 && ((pintura = 40000) && (duro = 3000*20))
/*
                    if (comps == 5000) {
                        pintura = 10000 //mod 2
                        duro = (3000 * 10)
                    } else if (comps == 12000) {
                        pintura = 20000 //mod 2
                        duro = (3000 * 15)
                    } else if (comps == 18000) {
                        pintura = (40000) // SELECCION PINTURA STANDARD    
                        duro = (3000 * 20)
                    }*/

                    tipoElec= 'Duro (Standard + Obra)'
                    valorTotalModif = pintura + duro
                    
                    break;
                }

                return new Promise(function (resolve, reject) {
             
                    electModificacion != undefined ? resolve() : reject('Seleccione una opcion)')
             
             /*       if (electModificacion != undefined) {

                        resolve()

                    } else {
                        reject('Seleccione una opcion)')
                    }*/
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


function calidad() {

    let cal = 0
    let valorCal = 5
    let tCal = ""
    
    
    Swal
        .fire({

            title: 'Que calidad de materiales desea?',
            input: 'select',
            inputOptions: {
                'uno': 'Standard',
                'dos': 'Media',
                'tres': 'Alta',
            },
            inputPlaceholder: 'Seleccione un tipo de calidad',
            inputValidator: electCalidad => {                

                switch (electCalidad) {
                
                case 'uno':
                    cal = 1
                    tCal= 'Standard'
                   break;
    
                case 'dos':
                    cal=2
                    tCal= 'Media'
                    break;
                case 'tres':
                    cal = 3
                    tCal= 'Alta'
                    break;
                }
                    valorCal= cal
                return new Promise(function (resolve, reject) {
                   
                   electCalidad != undefined ? resolve() : reject('Seleccione una opcion)')
                   /*
                    if (electCalidad != undefined) {

                        resolve()

                    } else {
                        reject('Seleccione una opcion)')
                    }*/
                })


            }

        })
        .then(resultado => {
            if (resultado.value) {
                fCal = valorCal;
                newCal = tCal;
                Swal.fire(`Modificacion elegida: ${newCal}`)
                let calid = document.getElementById("cal");
                calid.innerHTML = `La calidad elegida es ${newCal}`;
                let tipoCal = {
                    calidad: fCal,// guardo valor de lo elegido en $$           
                }
                resumen.splice(3, 1, tipoCal)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
            if (resultado.value == undefined) {
                fCal = valorCal;
                newCal = tCal;
                Swal.fire(`Modificacion elegida: ${newCal}`)
                let calid = document.getElementById("cal");
                calid.innerHTML = `La calidad elegida es ${newCal}`;
                let tipoCal = {
                    calidad: fCal,// guardo valor de lo elegido           
                }
                resumen.push(tipoCal)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
    {}        });



}

function cantidad() {
    
        


    Swal
        .fire({

            title: 'Que calntidad de productos/accesorios desea utilizar?',
            input: 'select',
            inputOptions: {
                'uno': '5 a 10',
                'dos': '11 a 15',
                'tres': '16 a 20',
            },
            inputPlaceholder: 'Seleccione una cantidad',
            inputValidator: electCantidad => {                

                switch (electCantidad) {
                    
                    case 'uno':
                            cantt=1
                            elecCant= '5 a 10 productos' 
                            break;
                    case 'dos':
                            elecCant = ' 11 a 15 productos'
                            cantt= 2
                            break;
                    case 'tres':
                            cantt=3
                            elecCant = '16 a 20 productos'
                            break;
                    
                    }
                    

                return new Promise(function (resolve, reject) {
                    if (electCantidad != undefined) {

                        resolve()

                    } else {
                        reject('Seleccione una opcion)')
                    }
                })
            }

        })
        .then(resultado => {
            if (resultado.value) {
                fCant=cantt
                newCan = elecCant;
                Swal.fire(`Cantidad elegida: ${newCan}`)
                let cantid = document.getElementById("cant");
                cantid.innerHTML = `La cantidad elegida es ${newCan}`;
                let tipoCant = {
                    cantidad: fCant,// guardo valor de lo elegido en $$           
                }
                resumen.splice(4, 1, tipoCant)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
            if (resultado.value == undefined) {
                fCant=cantt
                newCan = elecCan;
                Swal.fire(`Cantidad elegida: ${newCan}`)
                let calid = document.getElementById("cant");
                calid.innerHTML = `La cantidad elegida es ${newCan}`;
                let tipoCant = {
                    cantidad: fCant,// guardo valor de lo elegido           
                }
                resumen.push(tipoCant)
                localStorage.setItem("resumen", JSON.stringify(resumen))
            }
    {}        });

}



function sumarTotal() {

    const co= localStorage.getItem('resumen');
    const comp= JSON.parse(co);
    const t= comp[1].tamaño
    const m= comp[2].tipo
    const c= comp[3].calidad
    const ca= comp[4].cantidad

    const sumaTotal= (t + m)
    let a=0
    
    c === 2  && (a = ((sumaTotal* 30) / 100))
    c === 3 &&  (a = ((sumaTotal* 50) / 100))

    const costo= sumaTotal + a
    
    Swal.fire(`El monto total aproximado es ${costo}  Animate al cambio!`) //cartel utilozando variable

    
                
          
}




/*//Desestructuracion de array

const [nom, tam, ti] = resumen



function verPresupuesto (nom, tam, ti){
    
    const monto =  (tam + tip)
    Swal.fire(`${nom} el monto total aproximado es ${monto}  Animate al cambio!`)

}*/





let button = document.getElementById('testButton');
let button1 = document.getElementById('testButton1');
let button2 = document.getElementById('testButton2');
let button3 = document.getElementById('testButton3');
let button4 = document.getElementById('testButton4');
let button5 = document.getElementById('testButton5');
/*let button6 = document.getElementById('testButton6');*/

button.addEventListener('click', saludar);
button1.addEventListener('click', tamaño);
button2.addEventListener('click', modificacion);
button3.addEventListener('click', calidad);
button4.addEventListener('click', cantidad);
button5.addEventListener('click', sumarTotal);
/* button6.addEventListener('click', verPresupuesto);*/