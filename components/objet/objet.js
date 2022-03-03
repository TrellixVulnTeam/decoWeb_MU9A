class Producto {

    constructor(nombre, id, precio, stock, cantidad) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
        this.cantidad = cantidad
    }


}

class Carrito {
    constructor() {


        this.obj = {}
        /*
        this.subtotal = 0
        this.cantidadTotal = 0*/
    }

    addProducto(producto) {

        let key = producto.nombre

        //validar stock
        producto.stock < 1 && `No hay stock de ${producto.nombre}`

        if (key in this.obj) {//aca evaluo si esta el objeto en carro, si esta agrego el precio y sumo 1 a la cantidad
            this.obj[key].cantidad++
            this.obj[key].subtotal += producto.precio
        } else {
            this.obj[key] = {// aca si no existe creo un objeto
                cantidad: 1,// con estas propiedades
                subtotal: producto.precio,
                unidadPrecio: producto.precio
            }


        }
        producto.stock--
    }


    rmProducto(p) {

        let key = p.nombre
        if (key in this.obj) {//aca evaluo si esta el objeto en carro, si esta agrego el precio y sumo 1 a la cantidad

            this.obj[key].cantidad < 1 && alert("No hay productos para eliminar")

            this.obj[key].cantidad--
            this.obj[key].subtotal -= p.precio

        } else {
            alert("No hay productos para eliminar")
        }

    }


    resumen() {
        console.log(this.obj) //muestra el estado del carrito
    }

    total() {

        let result = {
            cantidad: 0,// SE LO SUMA A ESTO
            total: 0// Y SE LO SUMA A ESTO
        }


        //RECORRE TODOS LOS OBJETOS, BUSCA LA CANTIDAD Y EL SUBTOTAL Y SE LO SUMA A RESULT.CANTIDAD Y RESULT.TOTAL
        for (const key in this.obj) {
            result.cantidad += this.obj[key].cantidad
            result.total += this.obj[key].subtotal
        }

        return result
    }
}

export {Producto, Carrito};