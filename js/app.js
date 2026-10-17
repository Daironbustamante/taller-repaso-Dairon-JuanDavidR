// 1. FASE DE SELECCIÓN
const botonTema = document.getElementById('btn-toggle-tema');
const cuerpoPagina = document.body;
const saludoTiempoReal = document.getElementById('saludo-tiempo-real');

// 2. RECUPERACIÓN DE PREFERENCIA DESDE LOCALSTORAGE
const temaGuardado = localStorage.getItem('preferenciaTema');

if (temaGuardado === 'oscuro') {
    cuerpoPagina.classList.add('dark-theme');
    if (botonTema) botonTema.textContent = "🌙 Oscuro";
} else {
    cuerpoPagina.classList.remove('dark-theme');
    if (botonTema) botonTema.textContent = "☀️ Claro";
}

// 3. EVENTO AL HACER CLIC EN EL BOTÓN DE TEMA
if (botonTema) {
    botonTema.addEventListener('click', function() {
        cuerpoPagina.classList.toggle('dark-theme');

        if (cuerpoPagina.classList.contains('dark-theme')) {
            botonTema.textContent = "🌙 Oscuro";
            localStorage.setItem('preferenciaTema', 'oscuro');
        } else {
            botonTema.textContent = "☀️ Claro";
            localStorage.setItem('preferenciaTema', 'claro');
        }
    });
}

// 4. SALUDO DINÁMICO
if (saludoTiempoReal) {
    const hora = new Date().getHours();
    let saludo = "Explora mis proyectos y habilidades en desarrollo web.";

    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días! Explora mis proyectos y habilidades en desarrollo web.";
    } else if (hora >= 12 && hora < 20) {
        saludo = "¡Buenas tardes! Explora mis proyectos y habilidades en desarrollo web.";
    } else {
        saludo = "¡Buenas noches! Explora mis proyectos y habilidades en desarrollo web.";
    }

    saludoTiempoReal.textContent = saludo;
}