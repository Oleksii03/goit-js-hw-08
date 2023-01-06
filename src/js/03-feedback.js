import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

initForm();

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((name, value) => console.log(name, value)); localStorage.removeItem(LOCALSTORAGE_KEY);
});

formEl.addEventListener('input', throttle((evt) => {
  let userInfoFromLS = localStorage.getItem(LOCALSTORAGE_KEY);
  userInfoFromLS = userInfoFromLS ? JSON.parse(userInfoFromLS) : {};
  userInfoFromLS[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userInfoFromLS));
}, 500));

function initForm() {
  let userInfoFromLS = localStorage.getItem(LOCALSTORAGE_KEY);
  if (userInfoFromLS) {
    userInfoFromLS = JSON.parse(userInfoFromLS);
    Object.entries(userInfoFromLS).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
};