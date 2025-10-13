const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.teacher-card__button');
const modalBackdrop = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close-btn');

const handleModalOpen = () => {
  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';
};

const handleModalClose = () => {
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';
};

openModalBtns.forEach((button) => {
  button.addEventListener('click', handleModalOpen);
});

modalBackdrop.addEventListener('click', handleModalClose);
closeModalBtn.addEventListener('click', handleModalClose);
