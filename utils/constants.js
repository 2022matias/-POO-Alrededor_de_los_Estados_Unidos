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

export const openFormButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector(".popup");
export const popupContainer = document.querySelector(".popup__container");
export const popupCloseIcon = popupContainer.querySelector(".popup__close-icon");
export const profileName = document.querySelector(".profile__jacques");
export const profileSkill = document.querySelector(".profile__explorer");
export const inputName = document.querySelector(".popup__name");
export const inputSkill = document.querySelector(".popup__skill");
export const newCardPlace = document.querySelector(".popup__place");
export const newCardLink = document.querySelector(".popup__url");
export const cardContainer = document.querySelector(".elements");
export const cardListSelection = document.querySelector("#elements");

export const openFormImage = document.querySelector(".profile__add-button");
export const popupFormImage = document.querySelector(".popup_card");
export const popupFormImageContainer = document.querySelector(".popup__container_card");
export const closeFormImage = document.querySelector(".popup__close-icon-card");