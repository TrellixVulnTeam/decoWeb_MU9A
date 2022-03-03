const lista = document.getElementById('list')
fetch('/data.json')
.then ((response) => response.json())
    .then((data) => {
        data.forEach((product) => {
        const li = document.createElement('li')
        li.innerHTML = `
        
            <h4> ${product.name}<h4>
            <p> ${product.price}<h4>
        
        `

        lista.append(li)

        })
    })