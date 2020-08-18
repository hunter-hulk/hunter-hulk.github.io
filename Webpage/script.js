 // get all the lightbox elements and convert them to an array
 const lightboxElements = Array.from(document.querySelectorAll('[data-lightbox-src]'));

 // on each lightbox element
 lightboxElements.forEach(lightboxElement => {
     // start listening to when they are clicked
     lightboxElement.addEventListener('click', () => {
         // get the big src from the lightbox element
         const src = lightboxElement.dataset.lightboxSrc;

         openLightBox(src);
     });
 });

 // checks keys pressed and runs close Modal if key pressed is Escape
 document.addEventListener('keydown', () => {
     if (event.key === 'Escape') {
         closeModal();
     }

 });

 function openLightBox(src) {
     document.querySelector('.modal img').src = src; // puts the src in model image
     document.querySelector('.modal').classList.add('visible'); // makes model visible 
 }
 // closes modal
 function closeModal() {
     document.querySelector('.modal').classList.remove('visible'); // changes modal display to none
 }


