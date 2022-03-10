const lider = document.getElementById('lider')
fetch('/datos.json')
.then ((response) => response.json())
    .then((data) => {
        data.forEach((txt) => {
        const lis = document.createElement('lis')
        
        lis.innerHTML = `
            
            <h4> ${txt.nombre} <h4>
            
        `

        lider.append(lis)

        })
    })

    