
import { addBtnListener } from "./listener.js";
import { saveDb } from "./localStorage.js";
import { showPizzaList } from "./showPizzasList.js";

document.addEventListener('DOMContentLoaded', () => {
    addBtnListener()
    saveDb()
    showPizzaList()
    }
)
