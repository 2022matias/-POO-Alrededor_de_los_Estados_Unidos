const openFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');
const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill'); 


function toggle(){
	inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popup.classList.toggle('popup__visible');
}

openFormButton.addEventListener('click', toggle);
popupCloseIcon.addEventListener('click', toggle); 


function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
	popup.classList.add('popup__visible');
}

popupContainer.addEventListener('submit', handleFormSubmit);









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


initialCards.array.forEach((link, name)=> {
  const cardTemplate = document.querySelector("#elements").content;
  let cardElements = document.querySelector(".elements");
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__image").src = link.value;
  cardElement.querySelector("element__name").textContent = name.value;
  cardElements.append(cardElement);
}); 























const popupTemplate = document.querySelector(".popup").content;
const popupCard = document.querySelector(".popup__card");
const popupContain = document.querySelector('.popup').cloneNode(true);

popupContain.querySelector(".popup__tittle").textContent = "Nuevo lugar";
popupContain.querySelector(".popup__name").textContent = "Título";
popupContain.querySelector(".popup__skill").textContent = "Enlace a la imagen";

popupCard.append(popupContain);


const openPopupContain = document.querySelector('.profile__add-button');
openPopupContain.addEventListener('click', toggleCard);
popupCloseIcon.addEventListener('click', toggleCard); 

function toggleCard(){
	popupCard.classList.toggle('popup__visible');
}