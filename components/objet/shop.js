import { Producto } from "module";
import { Carrito } from "module";

const producto1 = new Producto('Mesada',11, 10500, 5);
const producto2 = new Producto('MesaDeLuz',11, 10500, 5);
const producto3 = new Producto('Jarron',11, 10500, 5);
const producto4 = new Producto('Lampara',11, 10500, 5);
const producto5 = new Producto('Sillon',11, 10500, 5);
const producto6 = new Producto('Silla',11, 10500, 5);




let carrito= new Carrito()

function aggProducto(prod){
    let p= prod.addProducto();
}

// esto lo tengo que unir a un botn de +
carrito.addProducto(producto1)
console.log(carrito)
/*carrito.rmProducto(producto1)*/ //esto al de -

let agregar = document.getElementById('agregar');
let agregar1 = document.getElementById('agregar1');
let agregar2 = document.getElementById('agregar2');
let agregar3 = document.getElementById('agregar3');
let agregar4 = document.getElementById('agregar4');
let agregar5 = document.getElementById('agregar5');


agregar.addEventListener('click', aggProducto());
agregar1.addEventListener('click', aggProducto());
agregar2.addEventListener('click', aggProducto());
agregar3.addEventListener('click', aggProducto());
agregar4.addEventListener('click', aggProducto());
agregar5.addEventListener('click', aggProducto());
