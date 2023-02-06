import { Card } from "../components/Card.js"
import { popupFormImageContainer, openFormButton, popupCloseIcon, openFormImage,closeFormImage, popupContainer
  , inputName, profileName, inputSkill, profileSkill, popupProfile, popupFormImage, cardContainer, newCardPlace, newCardLink } from "./constants.js";

export const submitForm = popupFormImageContainer.addEventListener(
  "submit",
  function (evt) {
    evt.preventDefault();
    addCardForm();
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

function addCardForm() {
  const name = newCardPlace.value;
  const link = newCardLink.value;
  const data = { name, link };
  const card = new Card(data, "#elements");
  const cardElement = card._createCard();
  cardContainer.prepend(cardElement);
  popupFormImage.classList.add("visibility");
}