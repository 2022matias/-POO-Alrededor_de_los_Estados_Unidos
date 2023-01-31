import { Card } from "./Card.js";
import { initialCards, modalFunctions, submitForm } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

const cardContainer = document.querySelector(".elements");

initialCards.forEach((item) => {
  const card = new Card(item, "#elements");
  const cardElement = card._createCard();
  cardContainer.append(cardElement);
});

modalFunctions();
submitForm;

const validar = new FormValidator({});
validar.enableValidation();
const formularios = Array.from(document.querySelectorAll(".popup__container"));
formularios.forEach((elemento) => {
  elemento.addEventListener("input", (evt) => {
    validar.enableValidation();
  });
});