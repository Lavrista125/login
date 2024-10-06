var formSignin = document.querySelector('#Entrar');
var formSignup = document.querySelector('#Criar');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnEntrar').addEventListener('click', () => {
  formSignin.style.left = "25px";
  formSignup.style.left = "450px";
  btnColor.style.left = "0px";
});

document.querySelector('#btnCriar').addEventListener('click', () => {
  formSignin.style.left = "-450px";
  formSignup.style.left = "25px";
  btnColor.style.left = "110px";
});

