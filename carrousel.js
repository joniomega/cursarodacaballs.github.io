let currentIndex = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100; // Calcula el desplaçament en percentatge
  carouselInner.style.transform = `translateX(${offset}%)`; // Mou el contenidor
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Opcional: Afegir autoplay
//setInterval(nextSlide, 3000); // Canvia de slide cada 3 segons