const informacion = [
    {
        pregunta: '¿Cual fue el primer presidente en España?',
        a: 'Juan Carlos I',
        b: 'Adolfo Suarez',
        c: 'Carlos III',
        d: 'Felipe Gonzalez',
        correcta: "b",
    },
    {
        pregunta: '¿Cómo se llamaba Estambul antes de 1923?',
        a: 'Constatinopla',
        b: 'Mesopotamia',
        c: 'Babel',
        d: 'Imperio Romano',
        correcta: "a",
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        a: 'Ottawa',
        b: 'Montreal',
        c: 'Toronto',
        d: 'Quebec',
        correcta: "a",
    },
    {
        pregunta: '¿Cuántas teclas tiene un piano?',
        a: '75',
        b: '110',
        c: '96',
        d: '88',
        correcta: "d",
    },
    {
        pregunta: '¿Dónde se celebraron los primeros Juegos Olímpicos?',
        a: 'Tokyo',
        b: 'Paris',
        c: 'Atenas',
        d: 'San Luis',
        correcta: "c",
    }
];

const quiz = document.getElementById("quiz");
const respuestaEls = document.querySelectorAll(".respuesta");
const preguntaEl = document.getElementById("pregunta");
const texto_a = document.getElementById("texto_a");
const texto_b = document.getElementById("texto_b");
const texto_c = document.getElementById("texto_c");
const texto_d = document.getElementById("texto_d");
const enviarBtn = document.getElementById("enviar");

let preguntaActual = 0;
let puntuacion = 0;

cargarQuiz();

function cargarQuiz() {
    deseleccionarRespuestas();

    const preguntaActualInformacion = informacion[preguntaActual];

    preguntaEl.innerText = preguntaActualInformacion.pregunta;
    texto_a.innerText = preguntaActualInformacion.a;
    texto_b.innerText = preguntaActualInformacion.b;
    texto_c.innerText = preguntaActualInformacion.c;
    texto_d.innerText = preguntaActualInformacion.d;

}

function seleccionado() {
    let respuesta = undefined;

    respuestaEls.forEach((respuestaEl) => {
        if (respuestaEl.checked) {
            respuesta = respuestaEl.id;
        }
    });
    return respuesta;
}


function deseleccionarRespuestas() {
    respuestaEls.forEach((respuestaEl) => {
        respuestaEl.checked = false;
    });
}

enviarBtn.addEventListener("click", () => {
    //Marcar para comprobar la respuesta
    const respuesta = seleccionado();

    if (respuesta){
        if(respuesta === informacion[preguntaActual].correcta) {
            puntuacion++;
        }

        preguntaActual++;
        if(preguntaActual < informacion.length) {
            cargarQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Has respondido correctamente ${puntuacion}/${informacion.length} preguntas.</h2>
                <button onclick="location.reload()">Volver a</button>
            `;
        }
    } 
});