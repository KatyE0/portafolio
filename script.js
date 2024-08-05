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