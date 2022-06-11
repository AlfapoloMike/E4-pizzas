
import { showError } from "./error.js"
import { showPizzas } from "./showPizzas.js"

const pizzasLocal = localStorage.getItem('Pizzas')
const strLocalPizzas = JSON.parse(pizzasLocal)

export const addBtnListener = () => {
    const btn = document.querySelector('#main > form > button')
    const input = document.querySelector('#main > form > input[type=number]')
    input.setAttribute('max', 6)
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if(input.value > 0 && input.value <= strLocalPizzas.length){
            strLocalPizzas.map(localPizza =>{
                if(input.value == localPizza.id){
                    
                    showPizzas(localPizza.foto,localPizza.nombre,localPizza.ingredientes,localPizza.precio)
                }
            })
        }else{
            
            showError()
        }
    })

}