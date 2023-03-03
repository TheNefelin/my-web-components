export default function renderLoading() {
    const div = document.createElement("div");
    div.classList.add("loading");

    const img = document.createElement("img");
    img.src = "./img/load.gif";

    div.appendChild(img);

    return div;
}