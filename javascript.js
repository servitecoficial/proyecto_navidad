function generarNieve() {
    const nieve = document.getElementById('nieve');
    for (let i = 0; i < 100; i++) {
        const copo = document.createElement('div');
        copo.style.left = Math.random() * 100 + 'vw';
        copo.style.top = Math.random() * 100 + 'vh';
        copo.style.animationDuration = Math.random() * 3 + 2 + 's';
        copo.style.animationDelay = Math.random() * 2 + 's';
        nieve.appendChild(copo);
    }
}

function crearLuces() {
    const arbol = document.getElementById('arbol');
    for (let i = 0; i < 150; i++) {
        const luz = document.createElement('div');
        luz.className = 'luz';
        luz.style.backgroundColor = ['red', 'green', 'blue', 'yellow', 'white'][Math.floor(Math.random() * 5)];
        luz.style.top = Math.random() * 90 + '%';
        luz.style.left = Math.random() * 90 + '%';
        arbol.appendChild(luz);
    }
}

function actualizarContador() {
    const ahora = new Date();
    const navidad = new Date(ahora.getFullYear(), 11, 25);
    if (ahora > navidad) navidad.setFullYear(navidad.getFullYear() + 1);
    const diff = navidad - ahora;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('contador').textContent = `🎄 Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s 🎅`;
}

window.onload = () => {
    generarNieve();
    crearLuces();
    actualizarContador();
    setInterval(actualizarContador, 1000);
};