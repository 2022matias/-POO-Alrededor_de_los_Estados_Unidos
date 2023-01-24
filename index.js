import { Card } from "./Card.js";
import { initialCards, modalFunctions, abrirModal } from "./utils.js";
import { FormValidator } from "./validate.js";
// import { modalFunctions } from "./utils.js";
// modalFunctions();

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
// initialCards.forEach((item) => {
//   const card = new Card(item, "#elements");
//   const cardElement = card._createCard();
//   cardContainer.append(cardElement);
// });

// /*funcion para crear card*/
// function createCard(titleValue,linkValue) {
//   const cardTemplate = document.querySelector("#elements").content;
//   const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
//   const giveLike = cardElement.querySelector(".element__heart");
//   cardElement.querySelector(".element__image").src = linkValue;
//   cardElement.querySelector(".element__name").textContent = titleValue;
//   cardElement.querySelector(".element__image").addEventListener("click", function () {
//       enlargeImage.classList.add("opacity");
//       enlargeTitle.textContent = titleValue;
//       bigImage.src = linkValue;
//       enlargeImage.classList.remove("no-vision");
//       document.addEventListener("keydown", (evt) => {
//         if (evt.key === "Escape") {
//           enlargeImage.classList.add("no-vision");
//           enlargeImage.classList.add("opacity");
//         };
//       });
//       document.addEventListener("click", (evt) => {
//         if (evt.target.className === "fondo") {
//           enlargeImage.classList.add("no-vision");
//           enlargeImage.classList.add("opacity");
//         };
//       });
//     });
//     document.querySelector(".enlarge-image__close-image").addEventListener("click", function () {
//       enlargeImage.classList.add("no-vision");
//     });
//   cardElement.querySelector(".element__trash").addEventListener("click", function (event) {
//       event.target.closest(".element").remove();
//     });
//   giveLike.addEventListener("click", (event) => {
//     event.target.classList.toggle("element__heart-black");
//   });
//   cardElements.prepend(cardElement);
//   return cardElement;
// };

// /*agrega las 6 cartas iniciales*/
// initialCards.forEach((element)=> {
//    createCard(element.name,element.link);
// });