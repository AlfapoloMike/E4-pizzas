import { cleanHTML } from "./cleaner.js"
    const body = document.querySelector('#main > div.cardContainer')
export const showError =()=>{
    cleanHTML()
    const imgError = document.createElement('div')
    imgError.setAttribute('id', 'error')
    imgError.innerHTML = `
    <img class="picture" src="/assets/error.jpg" alt="">
    <p>Numero invalido</p>
    <p>Elige uno de la lista</p>
    `
    body.appendChild(imgError)
}
