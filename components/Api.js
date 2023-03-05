export class Api {
  constructor(options) {
    this._options = options;
    this._header = new Headers();
    this._header.append("Authorization", this._options.authorization);
    this._header.append("Content-Type", "application/json");
  }

  returnFetch(url, requestOptions) {
    return fetch(`${this._options.baseUrl}/${url}`, requestOptions);
  }

  getUserInfo() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };
    return this.returnFetch("users/me", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }

  getCards() {
    const requestOptions = {
      method: "GET",
      headers: this._header,
    };
    return this.returnFetch("cards", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }

  editProfile(name, about) {
    const requestOptions = {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    };

    return this.returnFetch("users/me", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }

  addCard(name, link) {
    const requestOptions = {
      method: "POST",
      headers: this._header,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    };
    return this.returnFetch("cards", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }

	deleteCard(id) {
		const requestOptions = {
      method: "DELETE",
      headers: this._header,
      body: JSON.stringify({
        id: id,
      }),
	};
	return this.returnFetch("cards", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }

	giveLike(id) {
		const requestOptions = {
      method: "PUT",
      headers: this._header,
      body: JSON.stringify({
        id: id,
      }),
	};
	return this.returnFetch("cards/likes", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }

	removeLike(id) {
		const requestOptions = {
      method: "DELETE",
      headers: this._header,
      body: JSON.stringify({
        id: id,
      }),
	};
	return this.returnFetch("cards/likes", requestOptions)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log("error", error));
  }


	updateAvatar(avatar) {
		const requestOptions = {
			method: "PATCH",
			headers: this._header,
			body: JSON.stringify({
				avatar: avatar,
			}),
		};

	return this.returnFetch("users/me", requestOptions)
		.then((res) => {
			return res.json();
		})
		.catch((error) => console.log("error", error));
}
}

export const api = new Api({
  authorization: "61c6f68c-f2f6-410f-a75d-8fc57629e184",
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_04",
});

