const form =  document.querySelector('form');
const nomInput = document.querySelector('#InputNom');
const prenomInput = document.querySelector('#InputPrenom');
const mobileInput = document.querySelector('#InputTel');
const emailInput = document.querySelector('input[type=email]');
const sujetInput = document.querySelector('#InputSujet');
const msgInput = document.querySelector('#InputMessage');

let nomValid = false; 
let prenomValid = false; 
let mobileValid = false;
let emailValid = false; 
let sujetValid = false; 
let msgValid = false; 

// console.log(form)

const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;
const SujetRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;

emailInput.addEventListener('input', (e)=>{
    console.log(e.target.value)
    if(EmailRegex.test(emailInput.value)){
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid')
    } else{
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid')
    }
}) 


function addClass(element,regex,value,valid) {
    if (regex.test(value)) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid') 
        valid = true
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        valid = false
    }
}

nomInput.addEventListener('input', e => addClass(nomInput,UserRegex, e.target.value,nomValid));
prenomInput.addEventListener('input', e => addClass(prenomInput,UserRegex, e.target.value,prenomValid));
sujetInput.addEventListener('input', e=>addClass(sujetInput,SujetRegex, e.target.value,sujetValid));
emailInput.addEventListener('input', e=>addClass(emailInput,EmailRegex, e.target.value,emailValid));
msgInput.addEventListener('input', e=>addClass(msgInput,MessageRegex, e.target.value,msgValid));
mobileInput.addEventListener('input',e=>{
    let tel = e.target.value;
    tel = tel.replace(/ /g, '');
    tel = tel.replace(/^0/, '+33');
    addClass(mobileInput, PhoneNumberRegex,tel,mobileValid)
})

form.addEventListener('submit', e=>{
    e.preventDefault();
    if (nomValid && prenomValid && telValid && emailValid && sujetValid && msgValid) {
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lasalledesport90@gmail.com",
        Password : "76C8286E090E4EFEE9F45EDD7FE41B69819F",
        To : 'salle2sport@outlook.fr',
        From : "lasalledesport90@gmail.com",
        Subject : sujetValue,
        Body : `${prenomValue} ${nomValue} qui a les coordonées suivantes :<br/> numéro de tel: ${telValue}<br/> adresse mail: ${emailValue}<br/> vous a envoyer le message suivant : <br/> ${msgValue}`
      }).then(message => message == 'OK' && location.reload())
    }
  })