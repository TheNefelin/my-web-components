import { renderNavBar } from "./renderNavBar.js";

export function renderNavBarParalax() {
    const section = document.createElement("section");
    section.classList.add("paralax");

    section.appendChild(renderNavBar());

    return section;
}