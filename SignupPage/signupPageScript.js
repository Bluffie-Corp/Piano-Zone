window.onload=function() {
  var signupForm = document.querySelector("#signupForm");
  if(signupForm){
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
    
      var email = loginForm['signupEmail'].value;
      var password = loginForm['signupPassword'].value;
    
      auth.createUserWithEmailWithAndPassword(email, password).then(cred => {
        Swal.fire({
          title: "Registrado Correctamente",
          text: "Usted se ha registrado exitosamente",
          confirmButtonColor: "#2ecc71",
          confirmButtonText: "Perfecto"
        })
      })
    })
  } else {
    console.log("No se ha encontrado nad")
  }
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
}
  
  