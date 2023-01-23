// /*variables formulario del perfil*/
const openFormButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');
const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill');
const newCardPlace = document.querySelector('.popup__place');
const newCardLink = document.querySelector('.popup__url');

// /*variables formulario de agregar imagenes*/
const openFormImage = document.querySelector('.profile__add-button');
const popupFormImage = document.querySelector('.popup_card');
const popupFormImageContainer = document.querySelector('.popup__container_card');
const closeFormImage = document.querySelector('.popup__close-icon-card');


 
//const cardElements = document.querySelector(".elements");
// openFormButton.addEventListener('click', toggleProfile);
// popupCloseIcon.addEventListener('click', toggleProfile);
// openFormImage.addEventListener('click', toggleCardForm);
// closeFormImage.addEventListener('click', toggleCardForm);
// popupContainer.addEventListener('submit', handleFormSubmit);


// popupFormImageContainer.addEventListener('submit', function(evt){
//   evt.preventDefault();
//   AddCardForm();
// });

// function toggleProfile(){
//   inputName.value = profileName.textContent;
//   inputSkill.value = profileSkill.textContent;
//   popupProfile.classList.toggle('popup-visible');
//   popupProfile.classList.add("opacity");
//   document.addEventListener("keydown", (evt) => {
//     if (evt.key === "Escape") {
//       popupProfile.classList.add("popup-visible");
//       popupProfile.classList.add("opacity");
//     };
//   });
//   document.addEventListener("click", (evt) => {
//     if (evt.target.className === "fondo") {
//       popupProfile.classList.add("popup-visible");
//       popupProfile.classList.add("opacity");
//     };
//   });
// };


// function toggleCardForm(){
//   popupFormImage.classList.toggle('visibility');
//   popupFormImage.classList.add("opacity");
//   document.addEventListener("keydown", (evt) => {
//     if (evt.key === "Escape") {
//       popupFormImage.classList.add("visibility");
//       popupFormImage.classList.add("opacity");
//     };
//   });
//   document.addEventListener("click", (evt) => {
//     if (evt.target.className === "fondo") {
//       popupFormImage.classList.add("visibility");
//       popupFormImage.classList.add("opacity");
//     };
//   });
// }
// function handleFormSubmit(event) {
//   event.preventDefault(event);
//   profileName.textContent = inputName.value;
//   profileSkill.textContent = inputSkill.value;
//   popupProfile.classList.add('popup-visible');
// }
// function AddCardForm() {
//   popupFormImage.classList.add('visibility');
//   createCard(newCardPlace.value,newCardLink.value);
// }
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

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];
// /*agrega las 6 cartas iniciales*/
// initialCards.forEach((element)=> {
//    createCard(element.name,element.link);
// });
const bigImage = document.querySelector(".enlarge-image__image");
const enlargeTitle = document.querySelector(".enlarge-image__title")
const enlargeImage = document.querySelector(".enlarge-image");
const cardContainer = document.querySelector(".elements");


class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
};

createCard() {
const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);
this._element = cardElement;
this._element.querySelector(".element__image").src = this._link;
this._element.querySelector(".element__name").textContent = this._name;
this._setEventListeners();
return this._element;
};



_setEventListeners() {
  this._element.querySelector(".element__heart").addEventListener("click", () => {
    this._giveLike();
  });
  this._element.querySelector(".element__image").addEventListener("click", () => {
    this._zoomIn();
  });
  this._element.querySelector(".element__trash").addEventListener("click", () => {
     this._deleteCard();
  });
}
  

_giveLike(event) {
 this._element.querySelector(".element__heart").event.target.classList.toggle("element__heart-black");
} 

_deleteCard(event) {
 this._element.querySelector(".element__trash").event.target.closest(".element").remove();
}

_zoomIn() {
 enlargeImage.classList.add("opacity");
      enlargeTitle.textContent = this._name;
      bigImage.src = this._link;
      enlargeImage.classList.remove("no-vision");
      document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
          enlargeImage.classList.add("no-vision");
          enlargeImage.classList.add("opacity");
        };
      });
      document.addEventListener("click", (evt) => {
        if (evt.target.className === "fondo") {
          enlargeImage.classList.add("no-vision");
          enlargeImage.classList.add("opacity");
        };
      });
      document.querySelector(".enlarge-image__close-image").addEventListener("click", function () {
      enlargeImage.classList.add("no-vision");
    });
    };
}


initialCards.forEach((item) => {
  const card = new Card(item, "#elements");
  const cardElement = card.createCard();
  cardContainer.append(cardElement);
}); 

