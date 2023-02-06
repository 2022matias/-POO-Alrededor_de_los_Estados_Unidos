export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
		this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
	renderItems() {
		this._initialArray.forEach((item) => {
			const card = new Card(item, containerSelector);
			const cardElement = card._createCard();
			this.setItem(cardElement);
	});
	}
	setItem(element) {
		this._container.append(element);
	}
}