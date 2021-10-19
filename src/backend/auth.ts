import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { IUser } from '../models/Auth';

export default class AuthRoute {
	static win: any;

	static signUp(username: string, password: string) {
		const auth = getAuth();
		return createUserWithEmailAndPassword(auth, `${username}@gmail.com`, password)
			.then((userCredential) => {
				// Signed in 
				const user: any = userCredential.user;
				return {
					accessToken: user?.accessToken,
					displayName: user?.displayName,
					email: user?.email,
					username: user?.email?.split?.('@')?.[0],
					emailVerified: user?.emailVerified,
					isAnonymous: user?.isAnonymous,
					phoneNumber: user?.phoneNumber,
					photoURL: user?.photoURL,
					uid: user?.uid
				} as IUser;
				// ...
			})
			.catch((error) => {
				throw new Error(error.message);
				// ..
			});
	}

	static signIn(username: string, password: string) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, `${username}@gmail.com`, password)
			.then((userCredential) => {
				// Signed in 
				const user: any = userCredential.user;
				return {
					accessToken: user?.accessToken,
					displayName: user?.displayName,
					email: user?.email,
					username: user?.email?.split?.('@')?.[0],
					emailVerified: user?.emailVerified,
					isAnonymous: user?.isAnonymous,
					phoneNumber: user?.phoneNumber,
					photoURL: user?.photoURL,
					uid: user?.uid
				} as IUser;
				// ...
			})
			.catch((error) => {
				console.log(error.code, error.message);
				switch (error.code) {
					case 'auth/wrong-password':
						throw new Error('Password is incorrect');
					case 'auth/user-not-found':
						throw new Error('User not registered');
					default:
						throw new Error('Something went wrong');
				}
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

	SaveIUserToLocal(user: IUser) {
		AuthRoute.win.localStorage.user = JSON.stringify(user);
	}

	removeUserFromLocal() {
		AuthRoute.win.localStorage.clear();
	}


	static currentUser() {
		const auth = getAuth();
		return new Promise<IUser>((resolve, reject) => {
			auth.onAuthStateChanged((user: any) => {
				if (user) {
					const usr = {
						accessToken: user?.accessToken,
						displayName: user?.displayName,
						email: user?.email,
						username: user?.email?.split?.('@')?.[0],
						emailVerified: user?.emailVerified,
						isAnonymous: user?.isAnonymous,
						phoneNumber: user?.phoneNumber,
						photoURL: user?.photoURL,
						uid: user?.uid
					} as IUser;
					resolve(usr);
				}
				reject(null);
			});
		});
	}

	static getUser() {
		if (AuthRoute.win.localStorage && AuthRoute.win.localStorage.user) {
			return JSON.parse(AuthRoute.win.localStorage.user) as IUser;
		}
		return null;
	}
}
