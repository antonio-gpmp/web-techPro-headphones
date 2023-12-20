


const modelViewer = document.getElementById('toggle-poster'); 
const poster = document.querySelector('#poster');

function ajustarAlturaModelViewer() {
    modelViewer.autoRotateDelay = 0;
    if (window.matchMedia('(min-width: 768px)').matches) {
        modelViewer.style.height = '40rem';
    } else {
        modelViewer.style.height = '30rem';
    }
}

// Llama a la función cuando la página se carga
window.addEventListener('load', ajustarAlturaModelViewer);

// Llama a la función cuando la pantalla cambia de tamaño
window.addEventListener('resize', ajustarAlturaModelViewer);

modelViewer.addEventListener('error', () => {
    poster.style.display = 'block'
    modelViewer.style.display = 'none';
});