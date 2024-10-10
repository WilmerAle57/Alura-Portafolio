let currentSlide = 0;

function moveSlide(step) {
  const items = document.querySelectorAll('.carousel-item');
  currentSlide = (currentSlide + step + items.length) % items.length;

  const offset = -currentSlide * 100; // Mueve el carrusel
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Mostrar el botón cuando el usuario baja 20px de la parte superior
window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block"; // Mostrar el botón
  } else {
    scrollTopBtn.style.display = "none"; // Ocultar el botón
  }
}

// Función para hacer scroll hacia arriba
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Desplazamiento suave
  });
}
