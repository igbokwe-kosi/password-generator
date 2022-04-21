'use strict';
//prettier-ignore
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","_","-","+","*","/","=","?","!","@","#","$","%","^","&","(",")","[","]","{","}","<",">",".",",",":",";","'","\"","\\","|","~","`"," "
]

const btnPassword = document.getElementById('btn-password');
let btn = document.querySelector('.btn');
let passwordContainer = document.querySelector('.passwords');
let passwordEl = passwordContainer.querySelectorAll('.password');

console.log(passwordEl);

function randomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function generatePassword(array, length = 8) {
  let password = '';

  if (password.length < length) {
    for (let i = 0; i < length; i++) {
      password += array[randomNumber()];
    }
  }

  return password;
}

const copyToClipboard = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

btnPassword.addEventListener('click', function (e) {
  e.preventDefault();
  passwordEl.forEach(function (password) {
    password.textContent = generatePassword(characters, 8);
  });

  passwordContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('password')) {
      copyToClipboard(e.target.textContent);

      let copyEl = document.querySelector('.copied');
      copyEl.classList.remove('hide');
      setTimeout(() => {
        copyEl.classList.add('hide');
      }, 2000);
    }
  });
});
