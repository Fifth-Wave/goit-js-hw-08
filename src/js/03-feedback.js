import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const messageEl = formEl.querySelector('[name="message"]');
const emailEl = formEl.querySelector('[name="email"]');
formEl.addEventListener('input', throttle(onFormUpdate, 500));
formEl.addEventListener('submit', onFormSubmit);

const objectToStore = {
  email: '',
  message: '',
};

onFormLoad();

function onFormUpdate(evnt) {
  switch (evnt.target.name) {
    case 'email':
      objectToStore.email = evnt.target.value;
      break;

    case 'message':
      objectToStore.message = evnt.target.value;
      break;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectToStore));
}

function onFormLoad() {
  const storageInfo = localStorage.getItem(STORAGE_KEY);
  if (storageInfo) {
    const restoredObject = JSON.parse(storageInfo);
    emailEl.value = restoredObject.email;
    messageEl.value = restoredObject.message;
  }
}

function onFormSubmit(evnt) {
  evnt.preventDefault();
  const { email, message } = evnt.currentTarget;
  console.log('email: ', email.value, ' message: ', message.value);

  localStorage.removeItem(STORAGE_KEY);
  email.value = '';
  message.value = '';
}
