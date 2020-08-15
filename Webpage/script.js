 // get all the lightbox elements and convert them to an array
const lightboxElements = Array.from(document.querySelectorAll('[data-lightbox-src]'));

// on each lightbox element
lightboxElements.forEach(lightboxElement => {
  // start listening to when they are clicked
  lightboxElement.addEventListener('click', () => {
    // get the big src from the lightbox element
    const src = lightboxElement.dataset.lightboxSrc;
    
    // whatever you need to do to open the modal
    openLightBox(src);
  });
});

// checks keys pressed and runs close Modal if key is Escape
document.addEventListener('keydown', ()=> {
    if (event.key === 'Escape') {
        closeModal();
    }
    
});

function openLightBox(src) {
  // update the src in your big image and check the selector is right here
  document.querySelector('.modal img').src = src;
  // makes model visible
  document.querySelector('.modal').classList.add('visible');
}
// closes modal
function closeModal() {
  document.querySelector('.modal').classList.remove('visible');
}