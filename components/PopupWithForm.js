import { Popup } from "./Popup.js";
import { profilePencil, profileAvatar, allPopupButton } from "../utils/constants.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, classSelector, submitCallBack) {
    super(popupSelector, classSelector);
    this._popupSelector = popupSelector;
    this._submitCallBack = submitCallBack;
    this.setEventListeners();
  }
  _getInputValues() {
    return Array.from(this._popupSelector.querySelectorAll(".popup__input"));
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector(".popup__container")
      .addEventListener("submit", (evt) => {
        this._submitCallBack(this._getInputValues(), evt);
        setTimeout(function loader() {
          allPopupButton.textContent = "Guardando...";
        }, 3000);
      });
  }

  close() {
    super.close();
    profilePencil.classList.add("visibility");
    profileAvatar.style.opacity  = "1";
    this._popupSelector.querySelector(".popup__container").reset();
  }
}