export class Api {
	constructor(options) {
		this._options = options;
	}
	
	getUserInfo() {
		let header = new Headers(options);
		header.append("Authorization", this._options.authorization);
		let requestOptions = {
			method: "GET",
			headers: this._options.headers
		};
		return fetch(`${this._options.baseUrl}/user/me`, requestOptions)
		.then(res => res.json())
		.catch(error => console.log("error", error))
	}

	getCards() {
		let header = new Headers(options);
		header.append("Authorization", this._options.authorization);
		let requestOptions = {
			method: "GET",
			headers: this._options.headers
		};
		return fetch(`${this._options.baseUrl}/cards`, requestOptions)
		.then(res => res.json())
		.catch(error => console.log("error", error))
	}

	editProfile(name, about) {
		let header = new Headers(options);
		header.append("Authorization", this._options.authorization);
		let requestOptions = {
			method: "PATCH",
			headers: this._options.headers,
			body: JSON.stringify({
				name: 
				about: 
			})
		};
		
		return fetch(`${this._options.baseUrl}/users/me`, requestOptions)
		.then(res => res.json())
		.catch(error => console.log("error", error))
	}

	addCard(name, link) {
		let header = new Headers(options);
		header.append("Authorization", this._options.authorization);
		let requestOptions = {
			method: "POST",
			headers: this._options.headers
		};
		return fetch(`${this._options.baseUrl}/cards`, requestOptions)
		.then(res => res.json())
		.catch(error => console.log("error", error))
	}

}

