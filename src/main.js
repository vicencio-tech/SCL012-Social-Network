import {register} from './lib/index.js';
import {passIn} from './lib/index.js';
import {closeSession} from './lib/index.js';

//PAGINA DE INICIO

const landing = document.getElementById ('landing');

const loadLanding = ()=> {
window.location.hash = '/inicio';
const btnSignUp = document.createElement('button');
btnSignUp.innerHTML = 'Regístrate';
btnSignUp.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadRegisterUser();
});

const btnSignIn = document.createElement('button');
btnSignIn.innerHTML = 'Ya tengo cuenta';
btnSignIn.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadAccessUser();
});

const btnLoginGoogle = document.createElement('button');
btnLoginGoogle.innerHTML = 'Ingresa con Google';
btnLoginGoogle.addEventListener ('click', () => {
  loginGoogle();
});

const btnLoginFacebook = document.createElement('button');
btnLoginFacebook.innerHTML = 'Ingresa con Facebook';
btnLoginFacebook.addEventListener ('click', () => {
  loginFacebook();
});

landing.innerHTML = `
  <div class="time-service">
      <img src="time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
      <a id="logo" alt=""><img src="logo-weservice.png" style="cursor: pointer;"> </a>
  </div>
   <h1 class='text'>¿Andas buscando un servicio?</h1>
  `;

landing.appendChild(btnSignUp);
landing.appendChild(btnSignIn);
landing.appendChild(btnLoginGoogle);
landing.appendChild(btnLoginFacebook);
};

loadLanding();


//PAGINA PARA CREAR CUENTA

const registerUser = document.getElementById ('registerUser');

const loadRegisterUser = ()=> {
window.location.hash = '/registro';

const btnSignUpUser = document.createElement('button');
btnSignUpUser.innerHTML = 'Enviar';
btnSignUpUser.addEventListener ('click', () => {
const name = document.getElementById('name').value
const lastName = document.getElementById('lastName').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value

  register(name, lastName, email, password);
});

registerUser.innerHTML = `
<div class="logo">
      <a id="logo" alt=""><img src="logo-weservice.png" style="cursor: pointer;"> </a>
</div>
<form>
    <h1>Registro</h1>
    <input type='text' id='name' placeholder='Nombre'>
    <input type='text' id='lastName' placeholder='Apellido'>
    <input type='text' id='email' placeholder='Email'>
    <input type='text' id='password' placeholder='Contraseña'>

`;

registerUser.appendChild(btnSignUpUser);
}

// MANEJANDO LAS RUTAS
window.addEventListener('hashchange', () => {

if(window.location.hash === '#/registro'){ 
  loadRegisterUser();
}

});

// PAGINA PARA INICIAR SESION

const accessUser = document.getElementById ('accessUser');

const loadAccessUser = ()=> {
window.location.hash = '/ingreso';
wallPublications.innerHTML = '';
const btnSignInUser = document.createElement('button');
btnSignInUser.innerHTML = 'Entrar';
btnSignInUser.addEventListener ('click', () => {
  const email2 = document.getElementById('email2').value
  const password2 = document.getElementById('password2').value
  
  passIn(email2, password2);
});

accessUser.innerHTML = `
<div class="logo">
      <a id="logo" alt=""><img src="logo-weservice.png" style="cursor: pointer;"> </a>
</div>
<form>
    <input type='text' id='email2' placeholder='Email'>
    <input type='text' id='password2' placeholder='Contraseña'>
`;

accessUser.appendChild(btnSignInUser);
}


// OBSERVADOR PARA IDENTIFICAR SI EL USUARIO ESTA LOGUEADO

function observer(){ 
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) { 
        console.log('Existe usuario activo');
        loadWallPublications();
        landing.innerHTML = '';
        
        //loadRegisterUser.innerHTML = '';
        accessUser.innerHTML= '';
        
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
        wallPublications.innerHTML = '';
        loadLanding();

        // User is signed out.
      }
    });
  }

observer();

//PAGINA DEL MURO

const wallPublications = document.getElementById ('content');

const loadWallPublications = ()=> {
window.location.hash = '/muro';

const btnCloseSession = document.createElement('button');
btnCloseSession.innerHTML = 'Cerrar sesión';
btnCloseSession.addEventListener ('click', () => {
  closeSession();
});

wallPublications.innerHTML = `
    <input type='search'>
  `
  ;

  wallPublications.appendChild(btnCloseSession);

};

// MANEJANDO LAS RUTAS
window.addEventListener('hashchange', () => {

  if(window.location.hash === '#/muro'){ 
    loadWallPublications();
  }else if(window.location.hash === '#/ingreso'){
    loadAccessUser();
  }
  
  });

  //LOGIN CON GOOGLE

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}

const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}
