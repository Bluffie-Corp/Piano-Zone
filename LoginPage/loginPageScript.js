  // Your web app's Firebase configuration
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  
  var firebaseConfig = {
    apiKey: "AIzaSyCsFBpqVFA-5B0i4mL4cg2FHKQvgyX7qAY",
    authDomain: "rdg-1220.firebaseapp.com",
    databaseURL: "https://rdg-1220.firebaseio.com",
    projectId: "rdg-1220",
    storageBucket: "rdg-1220.appspot.com",
    messagingSenderId: "736549219111",
    appId: "1:736549219111:web:473c1270f3d846c7ad5702",
    measurementId: "G-GDN2EH6GXK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

