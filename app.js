
import { addBtnListener } from "./js/listener.js";
import { saveDb } from "./js/localStorage.js";
import { showPizzaList } from "./js/showPizzasList.js";

document.addEventListener('DOMContentLoaded', () => {
    addBtnListener()
    saveDb()
    showPizzaList()
    }
)
