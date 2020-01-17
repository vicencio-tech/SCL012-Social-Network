
import {register} from './lib/index.js';
import {passIn} from './lib/index.js';
import {observer} from './lib/index.js';
import {signOff} from './lib/index.js';
import {showUp} from './lib/index.js';

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
});
