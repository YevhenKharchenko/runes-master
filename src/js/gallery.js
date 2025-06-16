const gallerySlides = document.querySelectorAll('.gallery-list-item');
const galleryBtn = document.getElementById('galleryDownArrow');
const galleryBtnIcon = galleryBtn.querySelector('.arrow-icon');
let currentIndex = 0;
let direction = 'forward';

function updateGallerySlides() {
  gallerySlides.forEach((slide, i) => {
    slide.style.display =
      i >= currentIndex && i < currentIndex + 4 ? 'block' : 'none';
  });

  if (currentIndex + 4 >= gallerySlides.length) {
    galleryBtnIcon.style.transform = 'rotate(180deg)';
    direction = 'backward';
  } else if (currentIndex === 0) {
    galleryBtnIcon.style.transform = 'rotate(0deg)';
    direction = 'forward';
  }
}

galleryBtn.addEventListener('click', () => {
  if (direction === 'forward') {
    currentIndex = Math.min(currentIndex + 4, gallerySlides.length - 4);
  } else {
    currentIndex = Math.max(currentIndex - 4, 0);
  }
  updateGallerySlides();
});

updateGallerySlides();
