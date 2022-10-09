const idInput = document.getElementsByClassName("id")[0];
const pwInput = document.getElementsByClassName("pw")[0];
const inputBtn = document.getElementsByClassName('login__btn')[0];

function onBtn () {
  const id = idInput.value;
  const pw = pwInput.value;

  if (id && pw) {
    inputBtn.classList.remove('offBtn');
  } else {
    inputBtn.classList.add('offBtn');
  }

};

idInput.addEventListener("keyup", onBtn);
pwInput.addEventListener("keyup", onBtn);