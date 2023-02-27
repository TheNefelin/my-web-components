import { Scroll_Snap } from "../componentes/Scroll_Snap.js";

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

    id == 3 ? demoContenedor.appendChild(Scroll_Snap()) : false;
}

// function newNavBar01() {
//     $("#demo-contenedor").load("../componentes/navbar_01.html #navBar01");
// }

// function newNavBarParalax() {
//     $("#demo-contenedor").load("../componentes/navbar_01.html #navBar01Paralax");
// }