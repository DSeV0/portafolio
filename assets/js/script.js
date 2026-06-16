console.log("hola carlita");

// Obtener el botón y agregar evento de clic
const duplicarBtn = document.getElementById('duplicarBtn');
const textoDoble = document.querySelector('.doble');

duplicarBtn.addEventListener('click', function() {
    // Duplicar el texto del elemento con clase "doble"
    textoDoble.textContent = textoDoble.textContent + ' ' + textoDoble.textContent;
});
