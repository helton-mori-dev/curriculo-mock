// Modo de cores
var modoCor = document.querySelector('#alterna-cor');

modoCor.addEventListener('click', function() {
    document.documentElement.classList.toggle('alterna-cor');
    document.querySelector('body').classList.toggle('alterna-cor');
});