const pizzasList = document.querySelector('#main > div.pizzasList')
const pizzasLocal = localStorage.getItem('Pizzas')
const strLocalPizzas = JSON.parse(pizzasLocal)

export const showPizzaList = () =>{
    strLocalPizzas.map(pizza =>{
        const pizzaName = document.createElement('p')
        pizzaName.innerHTML = `
        <p>N°${pizza.id}:<span class="span"> ${pizza.nombre} </span></p>
        `
        pizzasList.appendChild(pizzaName)
    })
}