const mailBtn = document.querySelector('.mail_btn');
const inner = document.querySelector('.inner');
const box = document.querySelector('.box');
const formWrapper = document.querySelector('.contact_form_wrapper');
const form = document.querySelector('#form');
const contactInfo = document.querySelector('.contact_info_container');
const formContainer = document.querySelector('.form_container');
const underlay = document.querySelector('.underlay');

mailBtn.addEventListener('click', () => {
  formWrapper.classList.toggle('active');
  box.classList.toggle('active');
  contactInfo.classList.toggle('active');
  formContainer.classList.toggle('active');
  mailBtn.classList.toggle('active');
  inner.classList.toggle('active');
  console.log(mailBtn.hasAttribute('disabled'));
  underlay.classList.toggle('active');
  animate();
});

// anime js :D

const animate = () => {
  const tl = anime.timeline();
  if (mailBtn.className.includes('active')) {
    mailBtn.setAttribute('disabled', true);
    tl.add({
      targets: mailBtn,
      translateY: [0, -12, 0],
      scale: [1, 0.85, 1],
      rotate: 316,
      duration: 600,
      easing: 'easeInOutSine',
    })
      .add(
        {
          targets: '.selectors .first',
          translateX: [0, '70vw'],
          scaleY: [0, 1],
          duration: 600,
          opacity: [
            {
              value: 1,
              duration: 0.3,
            },
          ],
          delay: anime.stagger(100),
          complete: function () {
            mailBtn.setAttribute('disabled', false);
          },
        }
        /* '-=400' */
      )
      .add({
        targets: '.selectors .first',
        delay: 600,
        zIndex: -1,
      });
  } else {
    mailBtn.setAttribute('disabled', false);
    tl.add({
      targets: mailBtn,
      rotate: 0,
      duration: 400,
      easing: 'easeInOutSine',
    }).add(
      {
        targets: '.selectors .selector',
        translateY: 0,
        opacity: {
          value: 0,
          duration: 0,
        },
        duration: 300,
        delay: 0,
        easing: 'easeInOutSine',
        complete: function () {
          mailBtn.setAttribute('disabled', false);
        },
      }
      /* '-=400' */
    );
  }
};
