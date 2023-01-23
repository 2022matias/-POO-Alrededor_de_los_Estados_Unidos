// /*variables formulario del perfil*/
const openFormButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');
const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill');
const newCardPlace = document.querySelector('.popup__place');
const newCardLink = document.querySelector('.popup__url');

// /*variables formulario de agregar imagenes*/
const openFormImage = document.querySelector('.profile__add-button');
const popupFormImage = document.querySelector('.popup_card');
const popupFormImageContainer = document.querySelector('.popup__container_card');
const closeFormImage = document.querySelector('.popup__close-icon-card');


//const cardElements = document.querySelector(".elements");
openFormButton.addEventListener('click', toggleProfile);
popupCloseIcon.addEventListener('click', toggleProfile);
openFormImage.addEventListener('click', toggleCardForm);
closeFormImage.addEventListener('click', toggleCardForm);
popupContainer.addEventListener('submit', handleFormSubmit);


popupFormImageContainer.addEventListener('submit', function(evt){
  evt.preventDefault();
  AddCardForm();
});

export function toggleProfile(){
  inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popupProfile.classList.toggle('popup-visible');
  popupProfile.classList.add("opacity");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popupProfile.classList.add("popup-visible");
      popupProfile.classList.add("opacity");
    };
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.className === "fondo") {
      popupProfile.classList.add("popup-visible");
      popupProfile.classList.add("opacity");
    };
  });
};


export function toggleCardForm(){
  popupFormImage.classList.toggle('visibility');
  popupFormImage.classList.add("opacity");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popupFormImage.classList.add("visibility");
      popupFormImage.classList.add("opacity");
    };
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.className === "fondo") {
      popupFormImage.classList.add("visibility");
      popupFormImage.classList.add("opacity");
    };
  });
}
export function handleFormSubmit(event) {
  event.preventDefault(event);
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
  popupProfile.classList.add('popup-visible');
}
export function AddCardForm() {
  popupFormImage.classList.add('visibility');
  createCard(newCardPlace.value,newCardLink.value);
}