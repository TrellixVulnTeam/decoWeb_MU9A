class Producto{
    constructor(nombre,precio,id){

    this.nombre= nombre
    this.precio = parseFloat(precio)
    this.id= id
}
}

const productosHabitacion = []

productosHabitacion.push(new Producto("Sillon", 12000,1))
productosHabitacion.push(new Producto("Cama", 10000,2))
productosHabitacion.push(new Producto("Colchon", 20000,3))
productosHabitacion.push(new Producto("Lampara", 8000,4))
productosHabitacion.push(new Producto("Alfombra", 17000,5))



function sacarProducto(id){
   

    let index = nombres.indexOf(id)
    if ( index > -1){
        productosHabitacion.splice(index,1)
    }
}


sacarProducto()
