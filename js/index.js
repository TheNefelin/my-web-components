import { renderNavBar } from "../componentes/renderNavBar.js";
import { renderParalax } from "../componentes/renderParalax.js";
import { renderNavBarParalax } from "../componentes/renderNavBarParalax.js";

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
}

// function newNavBar01() {
//     $("#demo-contenedor").load("../componentes/navbar_01.html #navBar01");
// }

// function newNavBarParalax() {
//     $("#demo-contenedor").load("../componentes/navbar_01.html #navBar01Paralax");
// }