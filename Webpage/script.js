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
     // update the src in your big image and checks the selector is right here
     document.querySelector('.modal img').src = src;
     // makes model visible
     document.querySelector('.modal').classList.add('visible');
 }
 // closes modal
 function closeModal() {
     document.querySelector('.modal').classList.remove('visible');
 }


var myIndex = 0;
mySlide();

function mySlide() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(mySlide, 2000); // Change image every 2 seconds
}