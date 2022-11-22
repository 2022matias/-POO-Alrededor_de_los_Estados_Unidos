const openFormButton = document.querySelector('.profile__edit_button');

const popup = document.querySelector('.popup');

const popupContainer = document.querySelector('.popup__container');

const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');

function openForm() {
	inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popup.classList.remove('popup_visible');
}

function closeForm () {
	popup.classList.add('popup_visible');
}

openFormButton.addEventListener('click', openForm);
popupCloseIcon.addEventListener('click', closeForm); 




const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');

const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill'); 

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
	popup.classList.add('popup_visible');
}

popupContainer.addEventListener('submit', handleFormSubmit);