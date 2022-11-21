const openFormButton = document.querySelector('.edit_button');

const popupContainer = document.querySelector('.popup__container');

const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');

function openForm() {
	inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popupContainer.classList.toggle('popup_visible');
}

openFormButton.addEventListener('click', openForm);
popupCloseIcon.addEventListener('click', openForm); 




const profileName = document.querySelector('.jacques');
const profileSkill = document.querySelector('.explorer');

const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill'); 

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
}

popupContainer.addEventListener('submit', handleFormSubmit);