const openFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');
const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill'); 

function openForm() {
	inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popup.classList.remove('popup__visible');
}

function closeForm () {
	popup.classList.add('popup__visible');
}

openFormButton.addEventListener('click', openForm);
popupCloseIcon.addEventListener('click', closeForm); 


function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
	popup.classList.add('popup__visible');
}

popupContainer.addEventListener('submit', handleFormSubmit);