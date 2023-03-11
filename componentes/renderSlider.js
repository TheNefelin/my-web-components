export default function renderSlider() {
    const tipoaAlim = [
        {id: 1, nombre: "Nombre 1", link: "..img/l-css.png"},
        {id: 2, nombre: "Nombre 2", link: "..img/l-html.png"},
        {id: 3, nombre: "Nombre 3", link: "..img/t-sql-server.png"},
        {id: 4, nombre: "Nombre 4", link: "..img/t-unity.png"},
        {id: 5, nombre: "Nombre 5", link: "..img/t-vs-code.png"},
    ];

    let pressed = false;
    let startX = 0;

    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("slider-section");

    const contenedor = document.createElement("div");
    contenedor.classList.add("slider-contenedor");
    contenedor.addEventListener("mousedown", function (e) {
        pressed = true;
        startX = e.clientX;
        this.style.cursor = "grabbing";
    });
    contenedor.addEventListener("mouseup", function (e) {
        pressed = false;
        this.style.cursor = "grab";
    });
    contenedor.addEventListener("mouseleave", function (e) {
        pressed = false;
    });
    contenedor.addEventListener("mousemove", function (e) {
        if (pressed) {
            this.scrollLeft += startX - e.clientX;
        };
    });

    tipoaAlim.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("slider");
        div.innerText = e.nombre;

        contenedor.appendChild(div);
    });

    section.appendChild(contenedor);

    demoContenedor.appendChild(section);
};

