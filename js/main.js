const gridsContainer = document.querySelector(`.grids-container`);
const showBtn = gridsContainer.childNodes[3];
const gridArea = gridsContainer.childNodes[1];
const pageTitle = document.querySelector(`h1`);

let arrayObjetos = [
    {
        nombre: "La Gioconda",
        artista: "Leonardo da Vinci",
        museo: "Museo del Louvre (París)",
        img: "./assets/gioconda.jpg",
    },
    {
        nombre: "Noche Estrellada",
        artista: "Vincent Van Gogh",
        museo: "Museo de Arte Moderno de Nueva York",
        img: "./assets/nocheestrellada.jpg",
    },
    {
        nombre: "Caminante Sobre el Mar de Nubes",
        artista: "Caspar Friedrich",
        museo: "museo de arte de Kunsthalle (Hamburgo)",
        img: "./assets/caminante.jpg",
    },
    {
        nombre: "La Creación de Adán ",
        artista: "Miguel Ángel",
        museo: "Bóveda de la Capilla Sixtina (Vaticano)",
        img: "./assets/creacion.jpg",
    },
    {
        nombre: "La Joven de la Perla ",
        artista: "Johannes Vermer",
        museo: "Desconocida",
        img: "./assets/joven.jpg",
    },
    {
        nombre: "La Persistencia de la Memoria",
        artista: "Salvador Dalí",
        museo: "Desconocida",
        img: "./assets/persistencia.jpg",
    },
    {
        nombre: "Baile en el Moulin de la Galette",
        artista: "Pierre-Auguste Renoir ",
        museo: "Museo de Orsay (París)",
        img: "./assets/baile.jpg",
    },
];

let shownGrids = false;
let printedPaintings = false;
let isHovered = false;
let alreadyDescripted = false;

const showGrids = (evt) => {
    evt.preventDefault();
    pageTitle.style.margin = "1em auto 0em";
    gridArea.classList.remove("hidden-grids");
    gridArea.classList.add("grids");
    if (!printedPaintings) {
        printPaintings();
    }
    if (shownGrids) {
        gridArea.classList.remove("grids");
        gridArea.classList.add("hidden-grids");
        pageTitle.style.margin = "1em auto 2em";
    }
    if (!shownGrids) {
        shownGrids = true;
    } else {
        shownGrids = false;
    }
};

showBtn.addEventListener("click", showGrids);

const printPaintings = () => {
    let index = 1;
    let actualObject = 0;
    for (let painting of arrayObjetos) {
        console.log(actualObject);
        console.log(`El nodo donde se está imprimiendo es en el: ${index}`);
        gridArea.childNodes[
            index
        ].innerHTML += `<img src="${arrayObjetos[actualObject].img}" alt="" class="img-painting">`;
        actualObject += 1;
        index += 2;
    }
};

const paintingHover = (evt) => {
    console.log(evt);
    if (!isHovered) {
        evt.path[1].classList.add("image-hovered");
        for (let painting of arrayObjetos) {
            let paintingValues = Object.values(painting);
            if (paintingValues.includes(evt.srcElement.attributes[0].value)) {
                evt.path[1].innerHTML += `<p class="text-painting-title">${painting.nombre}</p>`;
                evt.path[1].innerHTML += `<p class="text-painting">Autor: ${painting.artista}</p>`;
                evt.path[1].innerHTML += `<p class="text-painting">Ubicación: ${painting.museo}</p>`;
            }
        }
        isHovered = true;
    } else {
        evt.path[1].classList.remove("image-hovered");
        isHovered = false;
        evt.path[1].removeChild(evt.path[1].childNodes[3]);
        evt.path[1].removeChild(evt.path[1].childNodes[2]);
        evt.path[1].removeChild(evt.path[1].childNodes[1]);
    }
    // gridArea.childNodes[index].classList.add("image-hovered");
    /* let index = 1;
    for (index; index <= 13; index += 2) {} */
};

const gridDynamic = () => {
    let i = 1;
    for (let index = 0; index <= 17; index += 1) {
        console.log(i);
        let card = gridArea.childNodes[i];
        card.addEventListener("click", paintingHover);

        if (i < 30) {
            i += 1;
            console.log(`nuevo i: ${i}`);
        } else {
            i = 0;
        }
    }
};

gridArea.addEventListener("mouseover", gridDynamic);
