 //Hero-Slider
  /* document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.slider-btn.next');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const pagination = document.querySelector('.pagination');
  let currentIndex = 0;

  //Pagination 
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(index));
    pagination.appendChild(dot);
  });

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentIndex = index;
    updatePagination();
  }

  function updatePagination() {
    document.querySelectorAll('.pagination-dot').forEach(dot => dot.classList.remove('active'));
    pagination.children[currentIndex].classList.add('active');
  } 

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  Touch
  let startX = 0;
  const slider = document.getElementById('slider');

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  });
}); 



*/
/* JS zum Öffnen/Schließen
const tryBtn = document.getElementById('tryBtn');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');

tryBtn.addEventListener('click', () => {
  popup.classList.add('popup-show');
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('popup-show');
});

Optional: Klick außerhalb schließt das Popup
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('popup-show');
  }
}); */


//Vorteile Fade
const vorteile = document.querySelectorAll('.vorteil');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

vorteile.forEach(v => observer.observe(v));


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  const nextBtn = document.querySelector('.testimonial-btn.next');

  // Falls Buttons nicht vorhanden sind → nichts tun
  if (!prevBtn || !nextBtn) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // Swipe (optional)
  const slider = document.querySelector('.testimonial-slider');
  let startX = 0;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) nextBtn.click();
    if (diff < -50) prevBtn.click();
  });
});


  function openModal(id) {
    document.getElementById(id).style.display = 'flex';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

   // Schließen beim Klick außerhalb des Inhalts
  window.addEventListener('click', function(e) {
    document.querySelectorAll('.custom-modal').forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });


document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const plz = document.getElementById('plz').value.trim();
  const address = document.getElementById('address').value.trim();
  const message = document.getElementById('formMessage');

  if (name && plz && address) {
    message.textContent = 'Vielen Dank für die Bestellung!';
  }
    
    
    setTimeout(() => {
      closeModal('orderModal');
      document.getElementById('orderForm').reset();
      message.textContent = '';
    }, 2000);
  }
);







/* testimonial

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");

function showSlide(index) {
  const slider = document.querySelector(".testimonial-slider");
  if (!slider) return;
  const total = slides.length;
  if (index >= total) currentSlide = 0;
  else if (index < 0) currentSlide = total - 1;
  else currentSlide = index;

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

Autoplay
setInterval(nextSlide, 5000); */


function makeBubbles() {
  const container = document.querySelector('.bubble-container');

  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = 10 + Math.random() * 20; // 10–30 px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100 - 50}px`; // verteilt um die Ente
    bubble.style.animationDuration = `${2 + Math.random() * 2}s`; // 2–4 Sekunden


    container.appendChild(bubble);

    // Nach Animation löschen
    setTimeout(() => {
  bubble.remove();
  }, 4500); // etwas länger als max. Dauer

  }
}


// Nur alle <p> innerhalb des Footers auswählen
const footerParagraphs = document.querySelectorAll('footer p');

footerParagraphs.forEach(p => {
  p.addEventListener('click', (event) => {
    event.preventDefault(); // Falls die <p> einen Link enthalten, sicherheitshalber
    makeBubblesAt(event.pageX, event.pageY);
  });
});

/* document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll('.testimonial-slide');

  const image = document.getElementsByClassName('parallax-img');
  if (image.length > 0) {
    new simpleParallax(image, {
      scale: 1.3,
      delay: 0.6,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  }
}); */

