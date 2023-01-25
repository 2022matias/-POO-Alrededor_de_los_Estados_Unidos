import { Card } from "./Card.js"
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const bigImage = document.querySelector(".enlarge-image__image");
export const enlargeTitle = document.querySelector(".enlarge-image__title");
export const enlargeImage = document.querySelector(".enlarge-image");


const openFormButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const popupCloseIcon = popupContainer.querySelector(".popup__close-icon");
const profileName = document.querySelector(".profile__jacques");
const profileSkill = document.querySelector(".profile__explorer");
const inputName = document.querySelector(".popup__name");
const inputSkill = document.querySelector(".popup__skill");
const newCardPlace = document.querySelector(".popup__place");
const newCardLink = document.querySelector(".popup__url");
const cardContainer = document.querySelector(".elements");


const openFormImage = document.querySelector(".profile__add-button");
const popupFormImage = document.querySelector(".popup_card");
const popupFormImageContainer = document.querySelector(".popup__container_card");
const closeFormImage = document.querySelector(".popup__close-icon-card");



export const abrirModal = popupFormImageContainer.addEventListener(
  "submit",
  function (evt) {
    evt.preventDefault();
    AddCardForm();
  }
);

export function modalFunctions() {
  openFormButton.addEventListener("click", toggleProfile);
  popupCloseIcon.addEventListener("click", toggleProfile);
  openFormImage.addEventListener("click", toggleCardForm);
  closeFormImage.addEventListener("click", toggleCardForm);
  popupContainer.addEventListener("submit", handleFormSubmit);
}

function toggleProfile() {
  inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popupProfile.classList.toggle("popup-visible");
  popupProfile.classList.add("opacity");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popupProfile.classList.add("popup-visible");
      popupProfile.classList.add("opacity");
    }
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.className === "fondo") {
      popupProfile.classList.add("popup-visible");
      popupProfile.classList.add("opacity");
    }
  });
}

function toggleCardForm() {
  popupFormImage.classList.toggle("visibility");
  popupFormImage.classList.add("opacity");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      popupFormImage.classList.add("visibility");
      popupFormImage.classList.add("opacity");
    }
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.className === "fondo") {
      popupFormImage.classList.add("visibility");
      popupFormImage.classList.add("opacity");
    }
  });
}
function handleFormSubmit(event) {
  event.preventDefault(event);
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
  popupProfile.classList.add("popup-visible");
}

function AddCardForm() {
  const name = newCardPlace.value;
  const link = newCardLink.value;
  const data = { name, link };
  const card = new Card(data, "#elements");
  const cardElement = card._createCard();
  cardContainer.prepend(cardElement);
  popupFormImage.classList.add("visibility");
}