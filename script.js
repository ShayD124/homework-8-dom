// q 1

// function createDivFullName(firstName,lastName){
//     const makeDiv = document.createElement('div')
//     let paraOne = document.createElement('p')
//         paraOne.innerText = firstName
//         paraOne.style.color = 'red'
//         paraOne.style.textDecoration = 'underline'
//         makeDiv.appendChild(paraOne)

//     let paraTwo = document.createElement('p')
//         paraTwo.innerText = lastName
//         paraTwo.style.fontSize = '50px'
//         paraTwo.style.border = '1px solid black'
//         makeDiv.appendChild(paraTwo)
        
//     document.body.appendChild(makeDiv)    
// }
// create('Shay','Decena')

// q 2

let products = [
    {name: 'Laptop', description: 'Compact laptop', price: 200},
    {name: 'Razer Deathadder v3 pro', description: 'Best wireless mouse for gaming', price: 150},
    {name: 'RTX 4090', description: 'product 3 description', price: 2000},
    {name: 'product 4', description: 'product 4 description', price: 400}
]

function showProductByPrice(price){
    const priceInput = document.getElementById('price-input').value
    const containerProducts = document.getElementById('containerProducts')
    containerProducts.innerHTML = ''
    
    products.forEach(product => {
        if(product.price <= priceInput){
            const divProducts = document.createElement('div')
            divProducts.classList.add('product')
            divProducts.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>${product.price}$</p>`
            containerProducts.appendChild(divProducts)
        }
    })
}
