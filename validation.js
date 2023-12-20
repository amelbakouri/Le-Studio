const form =  document.querySelector('form');
const emailInput = document.querySelector('input[type=email]')
const mobileInput = document.querySelector('input[type=tel]')
const nomInput = document.querySelector('input[type=text]')
const prenomInput = document.querySelector('input[type=text]')
const sujetInput = document.querySelector('input[type=text]')

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


function addClass(element,regex,value) {
    if (regex.test(value)) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid') 
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
    }
}

nomInput.addEventListener('input', e => addClass(nomInput,UserRegex, e.target.value));
prenomInput.addEventListener('input', e => addClass(prenomInput,UserRegex, e.target.value));
mobileInput.addEventListener('input',e=>{
    let tel = e.target.value;
    tel = tel.replace(/ /g, '');
    tel = tel.replace(/^0/, '+33');
    addClass(mobileInput, PhoneNumberRegex,tel)
})

sujetInput.addEventListener('input', e=>addClass(sujetInput,SujetRegex, e.target.value))
sujetInput.addEventListener('input', e=>addClass(sujetInput,SujetRegex, e.target.value))
 

form.addEventListener('submit', e=>{
    e.preventDefault()
    })