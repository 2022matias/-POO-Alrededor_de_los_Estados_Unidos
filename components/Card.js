import { enlargeImage } from "../utils/constants.js";
import { popupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _createCard() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._element = cardElement;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__heart")
      .addEventListener("click", () => {
        this._giveLike();
      });
    this._element
      .querySelector(".element__image")
      .addEventListener("click", (evt) => {
        this._zoomIn(evt);
      });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._deleteCard();
      });
  }

  _giveLike() {
    this._element
      .querySelector(".element__heart")
      .classList.toggle("element__heart-black");
  }

  _deleteCard() {
    this._element.remove();
  }

  _zoomIn(evt) {
    popupWithImage.open(evt);
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        enlargeImage.classList.add("no-vision");
        enlargeImage.classList.add("opacity");
      }
    });
    document.addEventListener("click", (evt) => {
      if (evt.target.className === "fondo") {
        enlargeImage.classList.add("no-vision");
        enlargeImage.classList.add("opacity");
      }
    });
    document
      .querySelector(".enlarge-image__close-image")
      .addEventListener("click", function () {
        enlargeImage.classList.add("no-vision");
      });
  }
}