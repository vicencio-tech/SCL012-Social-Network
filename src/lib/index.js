 /* export function register(email,password){ //PARA CREAR CUENTA
    // si esta promesa no funciona, se ejecutará el catch, el cual captura el error y lo alerta
    firebase.auth().createUserWithEmailAndPassword(email,password)  
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };


export function passIn(email2,password2){ //PARA INGRESAR
  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });  
}

export function observer(){ // si existe un usuario ya registrado ejecutara un if y sino no hace nada
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
      showUp();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}

function showUp(){ 
  document.getElementById('btnlogout').style.display = 'block';
}
export function signOff(){ 
  firebase.auth().signOut()
  .then(function(){
    document.getElementById('btnlogout').style.display = 'none';
  })
  .catch(function(error){
  })
}
*/