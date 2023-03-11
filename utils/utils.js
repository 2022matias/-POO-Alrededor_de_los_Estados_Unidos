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
  allPopupButton,
  profileAvatar
} from "./constants.js";

export function addCardForm(values, evt) {
  evt.preventDefault();
  const title = values[0].value;
  const image = values[1].value;
  const picture = values[2].value;
  api.getUserInfo().then((res) => {
    const data = [{ name: title, link: image, avatar: picture }];
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

profileAvatar.addEventListener("mouseover", (evt) => {
  profilePencil.classList.remove("visibility");
  evt.target.style.opacity = "0.5";
})
profileAvatar.addEventListener("mouseleave", (evt) => {
  profilePencil.classList.add("visibility");
  evt.target.style.opacity = "1";
})
profilePencil.addEventListener("mouseover", () => {
  profilePencil.classList.remove("visibility");
  profileAvatar.style.opacity = "0.5";
})