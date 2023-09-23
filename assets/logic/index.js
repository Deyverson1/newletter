document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const agradecimiento = document.getElementById('agradecimiento');
    const contenidoCompleto = document.getElementById('contenidoCompleto');
    const switchButton = document.getElementById('switch');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto
  
      // Oculta todo el contenido (incluyendo el formulario)
      contenidoCompleto.style.display = 'none';
  
      // Muestra el mensaje de agradecimiento
      agradecimiento.style.display = 'block';
    });
  
    // Agregar un controlador de eventos al botón "switch" para regresar al formulario
    switchButton.addEventListener('click', function () {
      // Muestra todo el contenido nuevamente
      contenidoCompleto.style.display = 'block';
  
      // Oculta el mensaje de agradecimiento
      agradecimiento.style.display = 'none';
    });
  });
  