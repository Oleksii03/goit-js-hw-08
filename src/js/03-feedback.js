import throttle from 'lodash.throttle';

const contactFormEl = document.querySelector('.feedback-form');
const userInfo = {};

const fillContactFormFields = () => {
  try {
    const userInfoFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (userInfoFromLS === null) {
      return;
    }

    for (const prop in userInfoFromLS) {
      contactFormEl.elements[prop].value = userInfoFromLS[prop];
    }
  } catch (err) {
    console.log(err);
  }
};

fillContactFormFields();

const onContactFormItemChange = event => {
  const { target } = event;

  const name = target.name;
  const value = target.value;

  userInfo[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorage.removeItem('feedback-form-state');
};

contactFormEl.addEventListener('input', onContactFormItemChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
