import { Card } from "./Card.js";
import { initialCards, modalFunctions, abrirModal } from "./utils.js";
import { FormValidator } from "./validate.js";

const cardContainer = document.querySelector(".elements");

initialCards.forEach((item) => {
  const card = new Card(item, "#elements");
  const cardElement = card._createCard();
  cardContainer.append(cardElement);
});

modalFunctions();
abrirModal;

const validar = new FormValidator({});
validar.enableValidation();
const formularios = Array.from(document.querySelectorAll(".popup__container"));
formularios.forEach((elemento) => {
  elemento.addEventListener("input", (evt) => {
    validar.enableValidation();
  });
});