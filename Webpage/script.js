 // Get all the lightbox elements and convert them to an array
const lightboxElements = Array.from(document.querySelectorAll('[data-lightbox-src]'));

// On each lightbox element
lightboxElements.forEach(lightboxElement => {
  // Start listening to when they are clicked
  lightboxElement.addEventListener('click', () => {
    // Get the big src from the lightbox element
    const src = lightboxElement.dataset.lightboxSrc;
    
    // Whatever you need to do to open the modal
    openLightBox(src);
  });
});

document.addEventListener('keydown', ()=> {
    if (event.key === 'Escape') {
        closeModal();
    }
    
});

function openLightBox(src) {
  // Update the src in your big image, check the selector is right here
  document.querySelector('.modal img').src = src;
  
  document.querySelector('.modal').classList.add('visible');
}

function closeModal() {
  document.querySelector('.modal').classList.remove('visible');
}