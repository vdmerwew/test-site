function initGallery(phpScript, containerId) {
  fetch(phpScript)
    .then(response => response.json())
    .then(images => {
      let currentIndex = 0;

      const mainImage = document.getElementById(`main-image-${containerId}`);
      const thumbnailsContainer = document.getElementById(`thumbnails-${containerId}`);
      const prevBtn = document.getElementById(`prev-${containerId}`);
      const nextBtn = document.getElementById(`next-${containerId}`);
      const thumbLeft = document.getElementById(`thumb-left-${containerId}`);
      const thumbRight = document.getElementById(`thumb-right-${containerId}`);

      function showImage(index) {
        currentIndex = index;
        mainImage.src = images[currentIndex];
        thumbnailsContainer.querySelectorAll('img').forEach(img => img.classList.remove('active'));
        thumbnailsContainer.children[index].classList.add('active');
      }

      function loadGallery() {
        mainImage.src = images[currentIndex];
        thumbnailsContainer.innerHTML = '';
        images.forEach((imgSrc, index) => {
          const thumb = document.createElement('img');
          thumb.src = imgSrc;
          if (index === currentIndex) thumb.classList.add('active');
          thumb.addEventListener('click', () => showImage(index));
          thumbnailsContainer.appendChild(thumb);
        });
      }

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      });

      // Scroll thumbnails left/right
      thumbLeft.addEventListener('click', () => {
        thumbnailsContainer.scrollBy({ left: -150, behavior: 'smooth' });
      });

      thumbRight.addEventListener('click', () => {
        thumbnailsContainer.scrollBy({ left: 150, behavior: 'smooth' });
      });

      loadGallery();
    })
    .catch(error => console.error(`Error loading ${containerId} gallery:`, error));
}

// Initialize galleries
window.addEventListener('DOMContentLoaded', () => {
  initGallery('load-images.php', 'action');
  initGallery('load-images-shows.php', 'shows');
  initGallery('load-images-angels.php', 'angels');
});
