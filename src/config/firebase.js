import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDhCDxTGQlS8l_OwpytwsAPjcKh1AAfGYY",
    authDomain: "nirmaan-dd8f5.firebaseapp.com",
    databaseURL: "https://nirmaan-dd8f5.firebaseio.com",
    projectId: "nirmaan-dd8f5",
    storageBucket: "nirmaan-dd8f5.appspot.com",
    messagingSenderId: "850611168510",
};
try {
	firebase.initializeApp(config);
	firebase.firestore();
	// console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase 