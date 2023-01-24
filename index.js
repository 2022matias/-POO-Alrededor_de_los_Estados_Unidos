// import { modalFunctions } from "./utils.js";
// modalFunctions();

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