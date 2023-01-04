import throttle from 'lodash.throttle';

const contactFormEl = document.querySelector('.feedback-form');
const userInfo = {};

const fillContactFormFields = () => {
  try {
    const userInfoFromLS = JSON.parse(localStorage.getItem('userData'));

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

  localStorage.setItem('userData', JSON.stringify(userInfo));
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorage.removeItem('userData');
};

contactFormEl.addEventListener('input', throttle(validateForm, 500), onContactFormItemChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
