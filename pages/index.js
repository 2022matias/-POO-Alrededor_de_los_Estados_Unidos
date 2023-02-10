import { initialCards, cardContainer, popupProfile, inputName, inputSkill } from "../utils/constants.js";
import { submitForm, PopupWithForm, UserInfo } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#elements");
      const cardElement = card._createCard();
      cardList.setItem(cardElement);
    },
  },
  cardContainer
);
cardList.renderItems();

const popupWithForm = new PopupWithForm(popupProfile, ".popup-visible");
  popupWithForm.open();
  popupWithForm.close();


const userInfo = new UserInfo(popupProfile, ".popup-visible", inputName, inputSkill);
userInfo.setUserInfo();



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