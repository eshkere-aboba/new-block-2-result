const tabButtons = document.querySelectorAll('.teacher-tab-buttons__btn');
const selectOptions = document.querySelectorAll('#select-list li');
const tabContents = document.querySelectorAll('.teacher-tab-content');
const modalBackdrop = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close-btn');
const selectBtnText = document.querySelector('#select-btn .select__selected-text');

const setButtonActive = (clickedButton) => {
  tabButtons.forEach((btn) => {
    btn.classList.remove('teacher-tab-buttons__btn--active');
  });
  selectOptions.forEach((option) => {
    option.setAttribute('aria-selected', 'false');
  });

  clickedButton.classList.add('teacher-tab-buttons__btn--active');

  const selectedOption = document.querySelector(
    `#select-list li[data-tab="${clickedButton.getAttribute('data-tab')}"]`,
  );
  selectedOption.setAttribute('aria-selected', 'true');
  selectBtnText.innerText = selectedOption.innerText.trim();
};

const setContentActive = (dataTab) => {
  tabContents.forEach((content) => {
    content.classList.remove('teacher-tab-content--active');
  });

  const tabContent = document.querySelector(`.teacher-tab-content[data-tab-content="${dataTab}"]`);
  if (!tabContent) {
    return;
  }

  tabContent.classList.add('teacher-tab-content--active');
  tabContent.scrollTo({ top: 0 });
};

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setButtonActive(button);

    const tab = button.getAttribute('data-tab');
    setContentActive(tab);
  });
});

[modalBackdrop, closeModalBtn].forEach((element) => {
  element.addEventListener('click', () => {
    const firstButton = tabButtons[0];
    setButtonActive(firstButton);
    setContentActive(firstButton.getAttribute('data-tab'));
  });
});
