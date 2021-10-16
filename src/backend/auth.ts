import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { User } from '../models/Auth';

export default class AuthRoute {
	static win: any;

	static signUp(username: string, password: string) {
		const auth = getAuth();
		return createUserWithEmailAndPassword(auth, `${username}@gmail.com`, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
				// ..
			});
	}

	static signIn(username: string, password: string) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, `${username}@gmail.com`, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
			});
	}

	static signOut() {
		const auth = getAuth();
		return signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	}

	SaveUserToLocal(user: User) {
		AuthRoute.win.localStorage.user = JSON.stringify(user);
	}

	removeUserFromLocal() {
		AuthRoute.win.localStorage.clear();
	}
	

	static currentUser() {
		const auth = getAuth();
		return new Promise((resolve, reject) => {
			auth.onAuthStateChanged((user) => {
				if (user) {
					console.log(user)
					resolve(user);
				}
				reject(null);
			});
		});
	}

	static getUser() {
		if (AuthRoute.win.localStorage && AuthRoute.win.localStorage.user) {
			return JSON.parse(AuthRoute.win.localStorage.user) as User;
		}
		return null;
	}
}
