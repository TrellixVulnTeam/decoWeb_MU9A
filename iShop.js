

const showProducts = () => {


    const divProducts = document.getElementById("products")

    let htmlListProducts = ""

    PRODUCTS.forEach(product => {
        htmlListProducts += `
    
            <div>
                <img src="${product.img}" </img> 
                <b> ${product.name} </b>
                <p> ${product.price}</p>
                

               <button class= "addCart" id="p-${product.id}"> Agregar al carrito </button>

            </div>

        `
    });


    divProducts.innerHTML = htmlListProducts
}


const showProductsCarts = () => {


    const divCart = document.getElementById("productsOnCart")

    let htmlListProducts = ""

    CART.forEach(product => {
        htmlListProducts += `
    
            <div>
                <b> ${product.name} </b>
                <i> Quantity: ${product.quantity}</i>
                <p> Unit: $ ${product.unit_price}</p>
                <p> Total: $ ${product.total}</p>
            
            </div>

        `
    });


   divCart.innerHTML = htmlListProducts

   registrarClickEvent()
}





registrarClickEvent = () => {
   const  btnAddCarts = document.getElementById("addCart")
   for(const btn of btnAddCarts){
       btn.onclick = addCart
   }
}

const addCart = (event) => {
    const  productId =  parseInt(event.target.id.split("-")[1])

    const product = PRODUCTS.find(p => p.id ==  productId)
    
    const productCart = new ProductCart(product) //creo objeto y le paso los elementos

    const productInCart = CART.find(p => p.id ==  productId)

    productCart ? productInCart.add() : CART.push(productCart)


    showProductsCarts()

}



showProducts()
