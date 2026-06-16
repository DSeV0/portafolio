console.log("hola carlita");

// Obtener el botón y agregar evento de clic
const duplicarBtn = document.getElementById('duplicarBtn');
const textoDoble = document.querySelector('.doble');

duplicarBtn.addEventListener('click', function() {
    // Crear un nuevo párrafo con el mismo contenido y estilos
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.className = 'doble'; // Mantener la misma clase para los estilos
    nuevoParrafo.textContent = textoDoble.textContent;
    
    // Agregar el nuevo párrafo después del existente
    textoDoble.parentNode.insertBefore(nuevoParrafo, textoDoble.nextSibling);
});
