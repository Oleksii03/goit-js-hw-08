import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const onContactFormItemInput = event => {
  const { target } = event;

  console.log(target);
}
