import firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD3CMdG6Ify9US2MGAbtqc8lVbE6L3CdhI",
  authDomain: "heal-218d2.firebaseapp.com",
  projectId: "heal-218d2",
  storageBucket: "heal-218d2.appspot.com",
  messagingSenderId: "306769566078",
  appId: "1:306769566078:web:f70c0f91b114bfea1b3b2f"
};

firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()