export default function renderSlider3() {
    const tipoaAlim = [
        {id: 1, nombre: "Nombre 1", link: "../img/l-css.png"},
        {id: 2, nombre: "Nombre 2", link: "../img/l-html.png"},
        {id: 3, nombre: "Nombre 3", link: "../img/t-sql-server.png"},
        {id: 4, nombre: "Nombre 4", link: "../img/t-unity.png"},
        {id: 5, nombre: "Nombre 5", link: "../img/t-vs-code.png"},
    ];

    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("slider3-section");

    const contenedor = document.createElement("div");
    contenedor.classList.add("slider3-contenedor");

    tipoaAlim.forEach((e, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide3");

        const img = document.createElement("img");
        img.src = e.link;
        img.addEventListener('dragstart', (e) => e.preventDefault())
        slide.appendChild(img);

        addMentodos(slide, index, contenedor);
  
        contenedor.appendChild(slide);
    });

    section.appendChild(contenedor);
    demoContenedor.appendChild(section);
};

function addMentodos(slide, index, contenedor) {
    let xInicial, xDespues;

    // eventos para toutch -------------------------
    slide.addEventListener("touchstart", (e) => {
        xInicial = e.touches[0].clientX;
        console.log(xInicial)
    });

    slide.addEventListener("touchmove", (e) => {
        // xDespues = e.touches[0].clientX;
    });

    slide.addEventListener("touchend", (e) => {
        xDespues = e.changedTouches[0].clientX;
        moverImg(direccion())
    });

    // eventos para mouse --------------------------

    // comportamiento ------------------------------
    function direccion() {
        let diferencia = xInicial - xDespues;
        let dragMin = 100;

        if (diferencia > 0 && Math.abs(diferencia) > dragMin && index < contenedor.childElementCount -1) return 1;
        else if (xInicial - xDespues < 0 && Math.abs(diferencia) > dragMin && index > 0) return -1;
        else return 0;
    };

    function moverImg(IzqDer) {
        indexFinal = index + IzqDer;
        contenedor.style.transform = `translateX(${-window.innerWidth * (indexFinal)}px)`
    };
};

// cuando la ventana cambiar el tamaño centraliza la imagen seleccionada ---------------
let indexFinal = 0;

window.addEventListener("resize", (e) => {
    const contenedor = document.querySelector(".slider3-contenedor");
    if (contenedor) {
        contenedor.style.transform = `translateX(${-window.innerWidth * (indexFinal)}px)`
    };
});