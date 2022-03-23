
const showProducts = () => {


    const divProducts = document.getElementById("products")// indexo el html con el div creado en index.html

    let htmlListProducts = ""  //creo la variable q se inserta luego

    PRODUCTS.forEach(product => { //armo la estructura dl html
        htmlListProducts += `
    
        <div class="card" style="width: 18rem;">
        <img src="${product.img}" width="100%"></img>
        
        <div class="card-body">
            <b class="card-title">${product.name}</b>
            <p class="card-text"> $ ${product.price}</p>

            <button class="addCart btn btn-primary" id="p-${product.id}"> Agregar al carrito </button>


        </div>  

     </div>    


    `
    })

    divProducts.innerHTML = htmlListProducts //lo coloco en el html

    registerClickEvent()







    

}


const showProductCarts = () => {


    const divCart = document.getElementById("productsOnCart")// indexo el html con el div creado en index.html

    let htmlListProducts = ""  //creo la variable q se inserta luego

    CART.forEach(product => { 
        htmlListProducts += `
    
       
        <div class="card" style="width: 18rem;">
        <img src="${product.img}" width="100%"></img>
        
        <div class="card-body">
            <b class="card-title">${product.name}</b>
            <p> Total: $ ${product.total}</p>
            <p> Cantidad: ${product.quantity}</p>

            <button class="vaciarCart btn btn-primary" id="p-${product.id}"> Quitar del carrito </button>
            
        
        </div>  

     </div> 
    `
    })

    divCart.innerHTML = htmlListProducts //lo coloco en el html

    registerClickEvent()
    registerClickEventRm()

}


const registerClickEvent = () => {

    const btnAddCarts = document.getElementsByClassName("addCart")
    for (const btn of btnAddCarts){
        btn.onclick = addCart
    }
}


const registerClickEventRm = () => {

    const btnVaciarCarts = document.getElementsByClassName("vaciarCart")
    for (const btn of btnVaciarCarts){
        btn.onclick = vaciarCart
    }
}

const addCart = (event) => {
  
    const productId= event.target.id.split("-")[1]
    console.log(productId)
    const product = PRODUCTS.find(p => p.id == productId)
    const productCart = new ProductCart(product)
    
    const productInCart = CART.find(p => p.id == productId)
    if(productInCart){
        productInCart.add()
    } else{
        
        CART.push(productCart)

    }



    showProductCarts()
    calcTotalCart()
  
}

const calcTotalCart = () => {
    let suma = 0
    CART.forEach(p => suma += p.total)

    const elemntTotal = document.getElementById("totalCart")
    elemntTotal.innerHTML= suma

}


const vaciarCart = () => {
    /*
  CART.forEach = () => {CART.pop()} */
    
  const productId= event.target.id[1]
  console.log(productId)
  const product = PRODUCTS.find(p => p.id == productId)

  const rm = CART.splice(product,1)



    showProductCarts()
    calcTotalCart()
}

showProducts()