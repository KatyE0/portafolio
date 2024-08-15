// js para texto con efecto de escritura

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Karina Escalante')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora WEB JUNIOR')
    .pauseFor(1000)
    .start();

let frase = document.getElementById('frase');

let typewriter2 = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

typewriter2
    .pauseFor(2500)
    .typeString('"Cada línea de código es una oportunidad para innovar y mejorar."')
    .pauseFor(300)
    .deleteAll()
    .typeString('....Por lo tanto, lo que debemos hacer es esforzarnos, perseverar y NUNCA RENDIRNOS')
    .pauseFor(1000)
    .start();

// js para animaciones de scroll

window.addEventListener("scroll", function () {
    let menupegajoso = document.querySelector(".menupegajoso");
    menupegajoso.classList.toggle("abajo", window.scrollY > 0);
    // menupegajoso.classList.toggle("fixed-top", window.scrollY >= 0);
})

window.addEventListener("scroll", function () {
    let btn_up = document.querySelector(".btn-up");
    btn_up.classList.toggle("abajo", window.scrollY > 0);
})


// window.addEventListener("scroll", function () {
//     let animacion = document.querySelectorAll(".animado");
//     let scrollTop = document.documentElement.scrollTop;
//     for (var i = 0; i < animacion.length; i++) {
//         let alturaAnimado = animacion[i].offsetTop;
//         if ((alturaAnimado) < scrollTop) {
//             // animacion[i].style.opacity = 1;
//             animacion[i].classList.add("mostrarDerecha");
//         }
//     }

// } )


