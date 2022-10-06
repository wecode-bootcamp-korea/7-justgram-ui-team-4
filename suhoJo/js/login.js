let idin = document.getElementById("#userId");
let pwin = document.getElementById("#userPw");
let btn = document.getElementById("#btnLogin");

function pushValue() {
  pwin.addEventListener("keyup", () => {
    if (idin.value && pwin.value) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
}

pushValue();
