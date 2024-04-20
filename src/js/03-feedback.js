import throttle from 'lodash.throttle';

//Identificare elemente ce contin date
const inputData = document.querySelector('input');
const messageData = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

//extragere valori
let inputValues = { email: '', message: '' };

const storageUpdate = throttle(function () {
  inputData.addEventListener('input', event => {
    inputValues.email = event.currentTarget.value;
    console.log(inputValues);
    localStorage.setItem(localStorageKey, JSON.stringify(inputValues));
  });
  messageData.addEventListener('input', event => {
    inputValues.message = event.currentTarget.value;
    console.log(inputValues);
    localStorage.setItem(localStorageKey, JSON.stringify(inputValues));
  });
}, 1000);
storageUpdate();

//preluarea valori din localStorage
const parsedInput = JSON.parse(localStorage.getItem(localStorageKey));
console.log(parsedInput); // de verificare

//autofill cu valoare din localStorage
inputData.value = parsedInput.email;
messageData.value = parsedInput.message;

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  let lastInputValues = { email: '', message: '' };
  lastInputValues.email = inputData.value;
  lastInputValues.message = messageData.value;
  console.log(lastInputValues);
  form.reset();
});
