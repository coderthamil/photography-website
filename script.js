const galleryImages = document.querySelectorAll('.gallery-container img');
let currentIndex = 0;

function nextImage() {
    galleryImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 