 import { templateWallPublications } from '../iu/vistas.js'
 const database = firebase.firestore();

  export function register(name, lastName, email, password){ //PARA REGISTRAR
    
    firebase.auth().createUserWithEmailAndPassword(email,password)  
    .then(function(){
      saveCollectionUser(name, lastName, email, password);
    })
    .then(()=> {
      emailVerification();
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorCode,errorMessage) ;  
      });
  };
  
  export function passIn(email2,password2){ // PARA INGRESAR
 
      firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
 
        let errorCode = error.code;
        let errorMessage = error.message;
  
        alert(errorCode,errorMessage) ;  
      });  
    }
    

// OBSERVADOR PARA IDENTIFICAR SI EL USUARIO ESTA LOGUEADO

export function observer(){ 
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) { 
          console.log('Existe usuario activo');
          templateWallPublications ();
         // User is signed in.
          let displayName = user.displayName;
          let email = user.email;
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          // ...
        } else {
          console.log('No existe usuario activo');
          //alert('inicia sesion');
          //wallPublications.innerHTML = '';
          loadLanding();
  
          // User is signed out.
        }
      });
    }
  
    observer();
    
  export function saveCollectionUser(name, lastName, email, password){
      database.collection('RegisteredUsers').add({
          name:name,
          lastName:lastName,
          email:email,
          password:password,
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      })
    }
    // ENVIAR EMAIL DE VERIFICACION 
    
    const emailVerification = () => {
      const user = firebase.auth().currentUser;
    
      user.sendEmailVerification()
      .then(()=>{
        // Email sent.
        console.log ('Enviando correo...');
      }).catch(function(error) {
        // An error happened.
        console.log (error);
      });
    }
    

    export function closeSession() {
      firebase.auth().signOut()  
        .then(() => {
          console.log('Saliendo...');
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
