
import {register} from './lib/index.js';
import {passIn} from './lib/index.js';
import {observer} from './lib/index.js';
import {signOff} from './lib/index.js';
import {showUp} from './lib/index.js';

  let script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Script terminó de cargarse y ejecutarse");
  });
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);



let registro= document.getElementById("registro").addEventListener("click", ()=>{
  `
  <form class= 'formulario'>
  <input type='name' id='name' placeholder='Ingresa tu Nombre'>
  <input type='lastName' id='lastName' placeholder='Ingresa tu Apellido'>
  <input type='email' id='email' placeholder='Ingresa email'>
  <input type='password' id='password' placeholder='Ingresa contraseña'>
  <button id='send'>Enviar</button>
  </form>
  `
});
document.getElementById('send').addEventListener('click',function(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    register(email, password);
});

document.getElementById('access').addEventListener('click',function(){
    let email2=document.getElementById('email2').value;
    let password2=document.getElementById('password2').value;
    passIn(email2, password2);
});

observer();

showUp();

document.getElementById('logout').addEventListener('click',function(){
    signOff();
})