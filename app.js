const mailBtn = document.querySelector('.mail_btn');
const formWrapper = document.querySelector('.contact_form_wrapper');
const form = document.querySelector('#form');

mailBtn.addEventListener('click', () => {
  formWrapper.classList.toggle('active');
});
