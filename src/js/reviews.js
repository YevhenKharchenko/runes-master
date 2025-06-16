const reviewsSlides = document.querySelectorAll('.reviews-list-item');
const reviewsBtn = document.getElementById('reviewsDownArrow');
const reviewsBtnIcon = reviewsBtn.querySelector('.reviews-arrow-icon');
let currentIndex = 0;
let direction = 'forward';

function updateReviewsSlides() {
  reviewsSlides.forEach((slide, i) => {
    slide.style.display =
      i >= currentIndex && i < currentIndex + 3 ? 'flex' : 'none';
  });

  if (currentIndex + 3 >= reviewsSlides.length) {
    reviewsBtnIcon.style.transform = 'rotate(180deg)';
    direction = 'backward';
  } else if (currentIndex === 0) {
    reviewsBtnIcon.style.transform = 'rotate(0deg)';
    direction = 'forward';
  }
}

reviewsBtn.addEventListener('click', () => {
  if (direction === 'forward') {
    currentIndex = Math.min(currentIndex + 3, reviewsSlides.length - 3);
  } else {
    currentIndex = Math.max(currentIndex - 3, 0);
  }
  updateReviewsSlides();
});

updateReviewsSlides();
