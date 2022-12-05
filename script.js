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








/* agregar links y nombres a las tarjetas */
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


initialCards.forEach((element)=> {
  const cardElements = document.querySelector(".elements");
  const cardTemplate = document.querySelector("#elements").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__image").src = element.link;
  cardElement.querySelector(".element__name").textContent = element.name;
  cardElements.append(cardElement);
}); 















/*expandir formulario para agregar imagen*/
function createCardForm() {
const popupTemplate = document.querySelector(".popup").content;
const popupCard = document.querySelector(".popup__card");
const popupContain = document.querySelector('.popup').cloneNode(true);
const cardElements = document.querySelector(".elements");

popupContain.querySelector(".popup__tittle").textContent = "Nuevo lugar";
popupContain.querySelector(".popup__name").setAttribute("placeholder", "Título");
popupContain.querySelector(".popup__skill").setAttribute("placeholder", "Enlace a la imagen");

cardElements.append(popupContain);
}


const openPopupContain = document.querySelector('.profile__add-button');
openPopupContain.addEventListener('click', toggleCard);
popupCloseIcon.addEventListener('click', toggleCard); 

function toggleCard(){
  const popupCard = document.querySelector(".popup__card");
	popupCard.classList.toggle('.popup__visible');
}







/* boton me gusta */ 
function giveLike() {
  document.querySelector(".element__heart").className = ".element__heart_black";
}

document.querySelector(".element__heart").addEventListener("click", giveLike); 











/* eliminar 1 imagen*/
const trash = document.querySelector(".element__trash");
trash.addEventListener("click", function () {
  const element = document.querySelector(".element")
  element.forEach((item) => {
    item.remove();
  });
});









/* ampliar imagen */
const openImage = document.querySelector('.element__image');
const popupImage = document.querySelector('.enlarge-image');
const bigImage = document.querySelector('image');
const closeImage = popupContainer.querySelector('.close-image');

openImage.addEventListener('click', expand);
closeImage.addEventListener('click', expand); 

initialCards.forEach((element)=> {
  cardElement.querySelector(".element__image").src = element.link;
  bigImage.src = cardElement;
}); 

function expand(){
  popupImage.classList.toggle('popup__visible');
}