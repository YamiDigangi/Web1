let currentIndexDos = 0;

function showSlideDos(index) {
    const slidesDos = document.getElementById('slidesDos');
    const totalSlidesDos = document.querySelectorAll('.cartaDos').length;
    
    if (index >= totalSlidesDos) {
        currentIndexDos = 0;
    } else if (index < 0) {
        currentIndexDos = totalSlidesDos - 1;
    } else {
        currentIndexDos = index;
    }

    const translateValueDos = -currentIndexDos * 330 + 'px';
    slidesDos.style.transform = 'translateX(' + translateValueDos + ')';
}

function nextSlideDos() {
    showSlideDos(currentIndexDos + 1);
}

function prevSlideDos() {
    showSlideDos(currentIndexDos - 1);
}

// Inicia el carrusel al cargar la página
window.onload = function () {
    showSlideDos(currentIndexDos);
};
