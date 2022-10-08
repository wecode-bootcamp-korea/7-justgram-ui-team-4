const $inputBoxForm = document.querySelector("#inputBoxForm");
const $inputId = document.querySelector("#inputId");
const $inputPassword = document.querySelector("#inputPassword");
const $loginBtn = document.querySelector("#loginBtn");
const $loginFailArelt = document.querySelector("#loginFailArelt");

const idArr = ["김정현"];
const passwordArr = ["1234"];

window.addEventListener("keyup", () => {
  if ($inputId.value && $inputPassword.value) {
    $loginBtn.removeAttribute("disabled");
    $loginBtn.style.backgroundColor = "rgb(30, 30, 227)";
  } else {
    $loginBtn.setAttribute("disabled", "disabled");
    $loginBtn.style.backgroundColor = "rgba(0, 145, 255, 0.354)";
  }
});

$loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    idArr.includes($inputId.value) &&
    passwordArr.includes($inputPassword.value)
  ) {
    localStorage.setItem("test", "test");
    location.href = "main.html?asdfadsf";
  } else $loginFailArelt.classList.remove("hidden");
});
