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

    tipoaAlim.forEach(e => {
        const slide = document.createElement("div");
        slide.classList.add("slide3");

        const img = document.createElement("img");
        img.src = e.link;
        img.addEventListener('dragstart', (e) => e.preventDefault())
        slide.appendChild(img);
  
        contenedor.appendChild(slide);
    });

    section.appendChild(contenedor);
    demoContenedor.appendChild(section);
}