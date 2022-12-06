/*variables formulario del perfil*/
const openFormButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupCloseIcon = popupContainer.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');
const inputName = document.querySelector('.popup__name');
const inputSkill = document.querySelector('.popup__skill'); 

/*variables formulario de agregar imagenes*/
const openFormImage = document.querySelector('.profile__add-button');
const popupFormImage = document.querySelector('.new-card');
const popupFormImageContainer = document.querySelector('.new-card__container');
const closeFormImage = document.querySelector('.new-card__close-icon');

/*variables para ampliar Imagen*/
const bigImage = document.querySelector('.image');



function toggleProfile(){
	inputName.value = profileName.textContent;
  inputSkill.value = profileSkill.textContent;
  popupProfile.classList.toggle('popup__visible');
}

function toggleCardForm(){
  popupFormImage.classList.toggle('visibility');
}

openFormButton.addEventListener('click', toggleProfile);
popupCloseIcon.addEventListener('click', toggleProfile);
openFormImage.addEventListener('click', toggleCardForm);
closeFormImage.addEventListener('click', toggleCardForm);


function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileSkill.textContent = inputSkill.value;
	popupProfile.classList.add('popup__visible');
}

popupContainer.addEventListener('submit', handleFormSubmit);
popupFormImageContainer.addEventListener('submit', handleFormSubmit);








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
  
  cardElement.querySelector(".element__image").addEventListener('click', function() {
    bigImage.src = element.link;
    bigImage.classList.toggle('no-vison');
  })
  
  cardElement.querySelector('.element__trash').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })
  
  function giveLike() {
    document.querySelector(".element__heart").className = ".element__heart_black";
  }
  document.querySelector(".element__heart").addEventListener("click", giveLike); 
});

