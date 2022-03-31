import firebase from 'firebase';

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCVG8QlyBE7C2GCdVCJNn1HYDcil_ecoZE",
  authDomain: "school-attendance-app-cffce.firebaseapp.com",
  databaseURL: "https://school-attendance-app-cffce-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-cffce",
  storageBucket: "school-attendance-app-cffce.appspot.com",
  messagingSenderId: "996529789016",
  appId: "1:996529789016:web:6323ab1e4903863e9a922d"
};

if (!firebase.app.lenght){
  firebase.initializeApp(firebaseConfig);
}
  
  export default firebase.database();
 

  