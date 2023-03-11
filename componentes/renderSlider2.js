export default function renderSlider2() {
    const tipoaAlim = [
        {id: 1, nombre: "Nombre 1", link: "../img/l-css.png"},
        {id: 2, nombre: "Nombre 2", link: "../img/l-html.png"},
        {id: 3, nombre: "Nombre 3", link: "../img/t-sql-server.png"},
        {id: 4, nombre: "Nombre 4", link: "../img/t-unity.png"},
        {id: 5, nombre: "Nombre 5", link: "../img/t-vs-code.png"},
    ];

    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const section = document.createElement("div");
    section.classList.add("slider2-contenedor");

    tipoaAlim.forEach((el, index) => {
        const img = document.createElement("img");
        img.src = el.link;
        img.addEventListener('dragstart', (e) => e.preventDefault())

        const div = document.createElement("div");
        div.classList.add("slide2");
        div.appendChild(img);

        addMetodos(div, index, section);
       
        section.appendChild(div);
    });

    demoContenedor.appendChild(section);
};

// metodos personalizados para el slide
function addMetodos(elemento, index, contenedor) {
    let xInicial, xDespues;
    elemento.onmousedown = seleccionar;
    elemento.addEventListener("touchstart", (e) => {
        console.dir(e.touches[0].clientX);
    });

    function seleccionar(e) {
        e.preventDefault();
        xInicial = e.clientX ;
        document.onmousemove = mover;
        document.onmouseup = soltar;
    }

    function mover(e) {
        e.preventDefault();

        // contenedor.style.transform = `translateX(${-xDespues}px)`
    };

    function soltar(e) {
        xDespues = e.clientX ;

        let differencia = xInicial - xDespues;
        let direccion;

        if (differencia > 0) {
            direccion = 1;
        } 
        else if (differencia < 0) {
            direccion = -1;
        };

        if (Math.abs(differencia) > 100) {
             if ((direccion > 0 && index < contenedor.children.length -1) || (direccion < 0 && index > 0)) {
                contenedor.style.transform = `translateX(${-window.innerWidth * (index + direccion)}px)`
            };
        };

        document.onmouseup = null;
        document.onmousemove = null;
    };
};

