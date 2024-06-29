const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//cerar el menu de burger
const navLink= document.querySelector(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);

// comentarios pars Java
//Seleccion de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
});
