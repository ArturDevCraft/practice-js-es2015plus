import User from './User.js';

export default class Admin extends User {
	//celowo nie użyłem "super" ponieważ js robi to domyślnie - nie wiem czy jest to dobra praktyka
	isPasswordCorrect() {
		if (this.password.length >= 10) {
			return true;
		}

		return false;
	}
}
