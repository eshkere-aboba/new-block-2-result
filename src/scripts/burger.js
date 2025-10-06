const burgerBtn = document.querySelector('#burger-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
const closeMobileMenuBtn = document.querySelector('#close-mobile-menu-btn');

const handleMobileMenuOpen = () => {
  document.body.classList.toggle('disable-scroll');
  mobileMenu.hidden = false;
  burgerBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('mobile-menu--is-open');
};

const handleMobileMenuClose = () => {
  document.body.classList.toggle('disable-scroll');
  mobileMenu.hidden = true;
  burgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('mobile-menu--is-open');
};

burgerBtn.addEventListener('click', handleMobileMenuOpen);
closeMobileMenuBtn.addEventListener('click', handleMobileMenuClose);
mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', handleMobileMenuClose);
});
