// alert("Hola mundo :D");
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500) // milisegundos 2.5 segundos
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
    .pauseFor(2500) // milisegundos 2.5 segundos
    .typeString('"Cada línea de código es una oportunidad para innovar y mejorar."')
    .pauseFor(300)
    .deleteAll()
    .typeString('....Por lo tanto, lo que debemos hacer es esforzarnos, perseverar y NUNCA RENDIRNOS')
    .pauseFor(1000)
    .start();
