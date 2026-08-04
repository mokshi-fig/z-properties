/* ===== LOADING SCREEN ===== */
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
    loader.classList.add('hidden');
  }, 500);
});

/* ===== SCROLL FADE-IN ANIMATION ===== */
const faders = document.querySelectorAll('.property-card, .service-item, .about-content');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in', 'visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => {
  el.classList.add('fade-in');
  appearOnScroll.observe(el);
});

/* ===== CONTACT FORM -> WHATSAPP ===== */
const form = document.getElementById('enquiry-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const text = `Hello, I'm ${name} (${phone}). ${message}`;
  const whatsappURL = `https://wa.me/919211533555?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, '_blank');
});

/* ===== BACK TO TOP BUTTON ===== */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
