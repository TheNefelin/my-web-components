import renderNavBar from "../componentes/renderNavBar.js";
import renderParalax from "../componentes/renderParalax.js";
import renderNavBarParalax from "../componentes/renderNavBarParalax.js";
import renderGaleria from "../componentes/renderGaleria.js";
import renderCarrusel from "../componentes/renderCarrusel.js";
import renderTarjetaExt from "../componentes/renderTarjetaExt.js";
import renderCarrito from "../componentes/renderCarrito.js";
import renderAcordion from "../componentes/renderAcordion.js";
import renderFooterLinks from "../componentes/renderFooterLinks.js";

window.onload = () => {
    inicializarBtns();
};

function inicializarBtns() {
    moverElemento(document.querySelector(".objAbsoluto"));
    moverElemento(document.querySelector(".btnSection"));

    const btns = document.querySelectorAll(".btnSection > button");

    btns.forEach(e => {
        e.addEventListener("click", () => {
          renderElement(e.value);
        });
    });
};

function renderElement(id) {
    id == 1 ? renderNavBar() : false;
    id == 2 ? renderParalax() : false;
    id == 3 ? renderNavBarParalax() : false;
    id == 4 ? renderGaleria() : false;
    id == 5 ? renderCarrusel() : false;
    id == 6 ? renderTarjetaExt() : false;
    id == 7 ? renderCarrito() : false;
    id == 8 ? renderAcordion() : false;
    id == 9 ? renderFooterLinks() : false;
};

function moverElemento(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    };
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    };
    
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    };
};

const objAbsolutoAgregar = document.querySelector(".objAbsoluto-agregar");
objAbsolutoAgregar.addEventListener("click", () => {
    const error = document.querySelector(".objAbsoluto-error");
    const txts = document.querySelectorAll(".objAbsoluto-menu > input");

    if (txts[0].value && txts[1].value) {
        error.innerText = "";
    
        const objAbsoluto = document.createElement("span");
        objAbsoluto.classList.add("objAbsoluto");

        const div =  document.createElement("div");
        const strong =  document.createElement("strong");
        strong.textContent = txts[0].value;
        div.appendChild(strong);
        objAbsoluto.appendChild(div);

        const span = document.createElement("span");
        span.innerText = txts[1].value;
        objAbsoluto.appendChild(span);

        moverElemento(objAbsoluto);

        const objAbsolutoContenedor = document.querySelector(".objAbsoluto-contenedor");
        objAbsolutoContenedor.appendChild(objAbsoluto);
    } else {
        error.innerText = "Debe Ingresar Título y Descripción"
    }
});

