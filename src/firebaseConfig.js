
import firebase from 'firebase/app'
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDqErFlOhlBTEjq6DVZBbTQRY2hTxSBQ1c",
    authDomain: "bellatrix-technologies.firebaseapp.com",
    projectId: "bellatrix-technologies",
    storageBucket: "bellatrix-technologies.appspot.com",
    messagingSenderId: "518686079451",
    appId: "1:518686079451:web:f1926e97fdf0a1c6850ffe"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  
  export default db;