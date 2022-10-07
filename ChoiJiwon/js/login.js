const input = document.getElementsByClassName("writeArea");
const loginBtn = document.getElementsByClassName("submit")[0];
const msg = document.getElementById("errmsg");
const writtenVal = document.createElement("p");
loginBtn.addEventListener("click", getValue);
const ids = [];
data.forEach((e) => ids.push(e.id));

//login button visible
const login = () => {
  //when id & pw both entered =>btn activate
  loginBtn.disabled = input[0].value && input[1].value ? false : true;
};

/**
 * recognize if keycode is Enter or not, (if enter)=> enter getValue func and distinguish if pw/id is correct or not.
 * (else)when the user writes, the login button gonna active.
 */
for (let element of input) {
  element.addEventListener("keyup", (event) => {
    event.code==="Enter"?getValue():login();
  });
}

/**
 * compare with id&&pw if same value with accounts in data.js
 */
function getValue() {
  if (ids.includes(input[0].value)) {
    let idx = ids.indexOf(input[0].value);
    if (data[idx].pw == input[1].value) {
      window.localStorage.setItem('user',input[0].value);
      location.href = "../main.html";    
    } else {
      writtenVal.innerText = "비밀번호가 잘못되었습니다.";
      msg.appendChild(writtenVal);
    }
  } else {
      writtenVal.innerText = "존재하지 않는 계정입니다.";
      msg.appendChild(writtenVal);
  }

}

