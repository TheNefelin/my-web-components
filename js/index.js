import { renderNavBar } from "../componentes/renderNavBar.js";
import { renderParalax } from "../componentes/renderParalax.js";
import { renderNavBarParalax } from "../componentes/renderNavBarParalax.js";
import { renderGaleria } from "../componentes/renderGaleria.js";
import { renderCarrusel } from "../componentes/renderCarrusel.js";

window.onload = () => {
    inicializarBtns();
}

function inicializarBtns() {
    const btns = document.querySelectorAll(".btnSection > button");

    btns.forEach(e => {
        e.addEventListener("click", () => {
            renderElement(e.value);
        });
    });
};

function renderElement(id) {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    id == 1 ? demoContenedor.appendChild(renderNavBar()) : false;
    id == 2 ? demoContenedor.appendChild(renderParalax()) : false;
    id == 3 ? demoContenedor.appendChild(renderNavBarParalax()) : false;
    id == 4 ? demoContenedor.appendChild(renderGaleria()) : false;
    id == 5 ? demoContenedor.appendChild(renderCarrusel()) : false;
};
