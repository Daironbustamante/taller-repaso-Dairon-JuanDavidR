
/* ==========================================
   RETO 1: MODO OSCURO Y CLARO INTERACTIVO
========================================== */

const btnTema = document.getElementById('btn-toggle-tema');
const body = document.body;

// Cambiar entre modo oscuro y modo claro
btnTema.addEventListener('click', function () {
    body.classList.toggle('tema-claro');

    // Actualizar el texto del botón
    if (body.classList.contains('tema-claro')) {
        btnTema.textContent = '🌙 Modo oscuro';
    } else {
        btnTema.textContent = '☀️ Modo claro';
    }
});

/* ==========================================
   RETO 2: SALUDO SEGÚN LA HORA
========================================== */

const textoSaludo = document.getElementById('saludo-tiempo-real');

const fechaActual = new Date();
const horaActual = fechaActual.getHours();

let mensaje = '';

if (horaActual >= 6 && horaActual < 12) {
    mensaje = '¡Buenos días! Espero que tengas una excelente mañana.';
} else if (horaActual >= 12 && horaActual < 18) {
    mensaje = '¡Buenas tardes! Gracias por visitar mi perfil.';
} else {
    mensaje = '¡Buenas noches! Descubre mi trabajo.';
}

textoSaludo.textContent = mensaje;
