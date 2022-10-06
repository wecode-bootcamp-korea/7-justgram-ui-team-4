const loginBtn = document.querySelector("button");
const userName = document.getElementsByTagName("input")[0];
const userPw = document.getElementsByTagName("input")[1];

function useLoginBtn() {
    if (userName.value && userPw.value) {
        loginBtn.classList.remove("disabled");
    } else {
        loginBtn.classList.add("disabled");
    }
}

userName.addEventListener("keyup", useLoginBtn);
userPw.addEventListener("keyup", useLoginBtn);
