import { Card } from "../components/Card.js"
import { popupFormImageContainer, openFormButton, popupCloseIcon, popupContainer
  , profileName, profileSkill, popupFormImage, cardContainer, newCardPlace, 
  newCardLink, enlargeImage, enlargeTitle, bigImage} from "./constants.js";

export const submitForm = popupFormImageContainer.addEventListener(
  "submit",
  function (evt) {
    evt.preventDefault();
    addCardForm();
  }
);





export class Popup {
  constructor(popupSelector, classSelector) {
    this._popupSelector = popupSelector;
    this._classSelector = classSelector;
  }
  open() {
    this._popupSelector.classList.toggle(this._classSelector);
  }
  close() {
    this._popupSelector.classList.toggle(this._classSelector);
    this._popupSelector.classList.add("opacity");
  }
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this._popupSelector.classList.add(this._classSelector);
        this._popupSelector.classList.add("opacity");
      }
    });
  }
  setEventListeners() {
    document.addEventListener("click", (evt) => {
      if (evt.target.className === "fondo") {
        this._popupSelector.classList.add(this._classSelector);
        this._popupSelector.classList.add("opacity");
      }
    });
  }
}

export class PopupWithImage extends Popup {
  constructor(popupSelector, classSelector) {
    super(popupSelector, classSelector);
  }
  open() {
    super.open(); 
    enlargeImage.classList.add("opacity");
    enlargeTitle.textContent = this._name;
    bigImage.src = this._link;
    
  }
}


export class PopupWithForm extends Popup {
  constructor(popupSelector, classSelector, submitCallBack) {
    super(popupSelector, classSelector);
    this._submitCallBack = submitCallBack;
  };
  _getInputValues() {
    
  };
  setEventListeners() {
    super.setEventListener();
    popupContainer.addEventListener("submit", submitCallBack);
    openFormButton.addEventListener("click", this.open());
    popupCloseIcon.addEventListener("click", this.close());
  }
  open() {
    super.open();
} 
  close() {
    super.close();
    popupContainer.reset();
  }
}



export class UserInfo extends Popup {
  constructor(popupSelector, classSelector, { name, skill}) {
    super(popupSelector, classSelector);
    this._name = name;
    this._skill = skill;
  };
  getUserInfo() {
    return {
      name: this._name,
      skill: this._skill
    }
  }
  setUserInfo() {
    profileName.textContent = this_.name.value;
    profileSkill.textContent = this._skill.value;
  }
}







// export function modalFunctions() {
  // openFormButton.addEventListener("click", () => {
  //   this.open();
  // });
  // popupCloseIcon.addEventListener("click", () => {
  //   this.close();
  // });
  // openFormButton.addEventListener("click", toggleProfile);
  // popupCloseIcon.addEventListener("click", toggleProfile);
//   openFormImage.addEventListener("click", toggleCardForm);
//   closeFormImage.addEventListener("click", toggleCardForm);
//   popupContainer.addEventListener("submit", handleFormSubmit);
// }

// function toggleProfile() {
//   inputName.value = profileName.textContent;
//   inputSkill.value = profileSkill.textContent;
//   popupProfile.classList.toggle("popup-visible");
//   popupProfile.classList.add("opacity");
//   document.addEventListener("keydown", (evt) => {
//     if (evt.key === "Escape") {
//       popupProfile.classList.add("popup-visible");
//       popupProfile.classList.add("opacity");
//     }
//   });
//   document.addEventListener("click", (evt) => {
//     if (evt.target.className === "fondo") {
//       popupProfile.classList.add("popup-visible");
//       popupProfile.classList.add("opacity");
//     }
//   });
// }

// function toggleCardForm() {
//   popupFormImage.classList.toggle("visibility");
//   popupFormImage.classList.add("opacity");
//   document.addEventListener("keydown", (evt) => {
//     if (evt.key === "Escape") {
//       popupFormImage.classList.add("visibility");
//       popupFormImage.classList.add("opacity");
//     }
//   });
//   document.addEventListener("click", (evt) => {
//     if (evt.target.className === "fondo") {
//       popupFormImage.classList.add("visibility");
//       popupFormImage.classList.add("opacity");
//     }
//   });
// }
// function handleFormSubmit(event) {
//   event.preventDefault(event);
//   profileName.textContent = inputName.value;
//   profileSkill.textContent = inputSkill.value;
//   popupProfile.classList.add("popup-visible");
// }

function addCardForm() {
  const name = newCardPlace.value;
  const link = newCardLink.value;
  const data = { name, link };
  const card = new Card(data, "#elements");
  const cardElement = card._createCard();
  cardContainer.prepend(cardElement);
  popupFormImage.classList.add("visibility");
}