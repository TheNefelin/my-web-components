import { LinksGroup, Links } from "../class/ApiFetch.js";
import renderLoading from "../componentes/renderLoading.js";
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
  const linksGrp = new LinksGroup();
  const links = new Links();

  const demoContenedor = document.querySelector("#demo-contenedor");
  demoContenedor.innerHTML = "";

  id == 1 ? demoContenedor.appendChild(renderNavBar()) : false;
  id == 2 ? demoContenedor.appendChild(renderParalax()) : false;
  id == 3 ? demoContenedor.appendChild(renderNavBarParalax()) : false;
  id == 4 ? demoContenedor.appendChild(renderGaleria()) : false;
  id == 5 ? demoContenedor.appendChild(renderCarrusel()) : false;
  id == 6 ? demoContenedor.appendChild(renderTarjetaExt()) : false;
  id == 7 ? demoContenedor.appendChild(renderCarrito()) : false;
  id == 8 ? demoContenedor.appendChild(renderAcordion()) : false;

  if (id == 9) {
    demoContenedor.appendChild(renderLoading());

    Promise.all([
      linksGrp.getLinksGroup().then(data => data),
      links.getLinks().then(data => data)
    ])
      .then(arr => {
        demoContenedor.innerHTML = "";
        demoContenedor.appendChild(renderFooterLinks(arr[0], arr[1]));
      })
      .catch(err => console.log(`ERROR: ${err}`));
  };
};

// -- contenedor btns ----------------------------------------------
// -----------------------------------------------------------------
moverElemento(document.querySelector(".btnSection"));
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