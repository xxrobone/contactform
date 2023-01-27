const mailBtn = document.querySelector('.mail_btn');
const formWrapper = document.querySelector('.contact_form_wrapper');
const form = document.querySelector('#form');
const contactInfo = document.querySelector('.contact_info_container');
const formContainer = document.querySelector('.form_container');

mailBtn.addEventListener('click', () => {
  formWrapper.classList.toggle('active');
  contactInfo.classList.toggle('active');
  formContainer.classList.toggle('active');
  mailBtn.classList.toggle('btn_ani');
});
