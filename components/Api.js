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
}


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_04",
  headers: {
    authorization: "61c6f68c-f2f6-410f-a75d-8fc57629e184",
    "Content-Type": "application/json"
  }
}); 