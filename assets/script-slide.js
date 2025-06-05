const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length; // Loop infinito
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length; // Volta ao último slide quando chega ao primeiro
  showSlider();
}

// Adicionando funcionalidade de autoplay
let slideInterval = setInterval(nextSlider, 3000); // Troca a cada 3 segundos

// Pausa o autoplay quando o usuário interage e reinicia depois
function restartAutoPlay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlider, 3000);
}

btnNext.addEventListener('click', () => {
  nextSlider();
  restartAutoPlay();
});

btnPrev.addEventListener('click', () => {
  prevSlider();
  restartAutoPlay();
});

// Exibir o primeiro slide ao carregar a página
showSlider();