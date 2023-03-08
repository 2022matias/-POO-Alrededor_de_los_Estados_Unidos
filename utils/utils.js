import { api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import {
  cardContainer,
  openFormButton,
  openFormImage,
  popupAvatar,
  popupFormImage,
  popupProfile,
  profilePencil,
  allPopupButton
} from "./constants.js";

export function addCardForm(values, evt) {
  evt.preventDefault();
  const title = values[0].value;
  const image = values[1].value;
  api.getUserInfo().then((res) => {
    const data = [{ name: title, link: image }];
    api.addCard(title, image).then((cardResponse) => {
      console.log(cardResponse);
      const cardList = new Section(
        {
          items: data,
          renderer: (item) => {
            const card = new Card(cardResponse, "#elements", res);
            const cardElement = card._createCard();
            cardList.setItemStart(cardElement);
          },
        },
        cardContainer
      );
      cardList.renderItems();
      this.close();
    });
  });
}

openFormImage.addEventListener("click", () => {
  const popupWithForm = new PopupWithForm(
    popupFormImage,
    "visibility",
    () => {}
  );
  popupWithForm.open();
});

openFormButton.addEventListener("click", () => {
  const popupWithForm = new PopupWithForm(
    popupProfile,
    "popup-visible",
    () => {}
  );
  popupWithForm.open();
});

profilePencil.addEventListener("click", () => {
  const popupWithForm = new PopupWithForm(
    popupAvatar,
    "popup-visible",
    () => {}
  );
  popupWithForm.open();
});

export function waiting() {
  allPopupButton.textContent = "Guardando...";
};