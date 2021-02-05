import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBSwExREs7IPu6N5QopcuaIz4fTai5IG0Y',
	authDomain: 'crwn-db-3fea3.firebaseapp.com',
	projectId: 'crwn-db-3fea3',
	storageBucket: 'crwn-db-3fea3.appspot.com',
	messagingSenderId: '998747393576',
	appId: '1:998747393576:web:23851e0bcc07248c8e2f1d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
