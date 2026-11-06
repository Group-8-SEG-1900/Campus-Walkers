let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 0) return;

  if (currentScrollY > lastScrollY) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
