const selectBtn = document.querySelector('#select-btn');
const selectBtnText = document.querySelector('#select-btn .select__selected-text');
const selectList = document.querySelector('#select-list');
const selectOptions = document.querySelectorAll('#select-list li');
const tabButtons = document.querySelectorAll('.teacher-tab-buttons__btn');
const modal = document.querySelector('.modal');
const tabContents = document.querySelectorAll('.teacher-tab-content');
const closeModalBtn = document.querySelector('.modal__close-btn');

const showSelectList = () => {
  selectList.removeAttribute('hidden');
  selectList.setAttribute('aria-expanded', 'true');
};

const hideSelectList = () => {
  selectList.setAttribute('hidden', '');
  selectList.setAttribute('aria-expanded', 'false');
};

const handleSelectBtnClick = () => {
  if (selectList.hasAttribute('hidden')) {
    showSelectList();
    return;
  }

  hideSelectList();
};

selectBtn.addEventListener('click', handleSelectBtnClick);

modal.addEventListener('click', (event) => {
  if (event.target.closest('.select')) {
    return;
  }

  hideSelectList();
});

const setActiveOption = (selectedOption) => {
  selectOptions.forEach((option) => {
    option.setAttribute('aria-selected', 'false');
  });
  tabButtons.forEach((btn) => {
    btn.classList.remove('teacher-tab-buttons__btn--active');
  });

  selectedOption.setAttribute('aria-selected', 'true');
  const foundTabButton = document.querySelector(
    `.teacher-tab-buttons__btn[data-tab="${selectedOption.getAttribute('data-tab')}"]`,
  );
  foundTabButton.classList.add('teacher-tab-buttons__btn--active');

  selectBtnText.innerText = selectedOption.innerText.trim();
};

const setActiveContent = (selectedOption) => {
  tabContents.forEach((content) => {
    content.classList.remove('teacher-tab-content--active');
  });
  const tabContent = document.querySelector(
    `.teacher-tab-content[data-tab-content="${selectedOption.getAttribute('data-tab')}"]`,
  );

  tabContent.classList.add('teacher-tab-content--active');
};

const handleOptionSelect = (selectedOption) => {
  setActiveOption(selectedOption);
  setActiveContent(selectedOption);
  hideSelectList();
};

selectOptions.forEach((option) => {
  option.addEventListener('click', (event) => {
    handleOptionSelect(event.target);
  });
});

closeModalBtn.addEventListener('click', () => {
  hideSelectList();
  setActiveContent(selectOptions[0]);
  setActiveOption(selectOptions[0]);
});
