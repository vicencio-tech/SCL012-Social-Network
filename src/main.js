import {register} from './lib/index.js';
import {passIn} from './lib/index.js';
import {observer} from './lib/index.js';
import {signOff} from './lib/index.js';
import {showUp} from './lib/index.js';

let logo = document.getElementById("logo");
logo.addEventListener("click",()=>{
  console.log("sirve");
   document.createElement("body",)
});

 /*  // ejecuta esta función cuando se cargue el documento
   window.onload = function() {
     console.log( "sirve");

    // crea dinámicamente un par de elementos HTML en una página vacia
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode("el texto que desee");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    
  };
   let registro= document.getElementById("registro");
   registro.addEventListener("click", ()=>{
     console.log("sirve");
     let next=document.getElementById("root");
     next.innerHTML=
    `
    <form class= 'formulario'>
    <input type='name' id='name' placeholder='Ingresa tu Nombre'>
    <input type='lastName' id='lastName' placeholder='Ingresa tu Apellido'>
    <input type='email' id='email' placeholder='Ingresa email'>
    <input type='password' id='password' placeholder='Ingresa contraseña'>
    <button id='send'>Enviar</button>
    </form>
    
    <input type='email' id='email' placeholder='Ingresa email'>
    <input type='password' id='password' placeholder='Ingresa contraseña'>
    <button id='send'>registrate</button>
    <input type='email' id='email2' placeholder='Ingresa email'>
    <input type='password' id='password2' placeholder='Ingresa contraseña'>
    <button id='access'>Ingresar</button>
    <button id='btnlogout' style='display:none;'>Cerrar Sesion</button>

    
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


document.getElementById('btnlogout').addEventListener('click',function(){
    signOff();
});
*/
