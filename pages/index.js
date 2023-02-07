import { initialCards, cardListSelection } from "../utils/constants.js";
import { modalFunctions, submitForm } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";



const cardList = new Section({
  data: initialCards,
  renderer: (Card) => {
    const card = new Card(item, "#elements");
    const cardElement = card._createCard();
    this.setItem(cardElement);
  },
},
cardListSelection
); 
cardList.renderItems(); 






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