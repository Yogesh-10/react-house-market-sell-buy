// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDL9YNDoLdqa6Qf7g1P3-jO-0ApMKSd1do',
	authDomain: 'house-market-project-bbf35.firebaseapp.com',
	projectId: 'house-market-project-bbf35',
	storageBucket: 'house-market-project-bbf35.appspot.com',
	messagingSenderId: '662830032174',
	appId: '1:662830032174:web:5be9a0eae619ee60a2c6bf',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
