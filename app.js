
import { saveDb } from "./js/localStorage.js";
import { addBtnListener } from "./js/listener.js";
import { showPizzaList } from "./js/showPizzasList.js";

saveDb()

document.addEventListener('DOMContentLoaded', () => {
    addBtnListener()
    showPizzaList()
    }
)
