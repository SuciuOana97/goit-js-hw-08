import throttle from 'lodash.throttle';
const LOCALE_STORAGE_KEY = 'contact-form-key';
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(storeInput, 500));
formRef.addEventListener('submit', onSubmit);

pageLoad();

function storeInput(event) {
  const { name, value } = event.target;

  let saveData = load(LOCALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;

  save(LOCALE_STORAGE_KEY, saveData);
}

function pageLoad() {
  const savedData = load(LOCALE_STORAGE_KEY);

  if (!savedData) {
    return;
  }
  Object.entries(savedData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();

  try {
    remove(LOCALE_STORAGE_KEY);
  } catch (error) {
    console.error(error);
  }
}

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
