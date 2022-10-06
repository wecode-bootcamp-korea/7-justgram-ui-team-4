const commentBtn = document.getElementsByClassName("c-submit");
const commentArea = document.getElementsByClassName("comment");
const write = document.getElementsByClassName("write");
let username = window.localStorage.getItem('user');
const btnarr = [];
const writearr = [];

 
//collection to array
for (let element of commentBtn) {
  btnarr.push(element);
}

//collection to array
for (let element of write) {
  writearr.push(element);
}

//button activation
const comment = () => {
  btnarr.forEach((element, idx) => {
    element.disabled = write[idx].value && 1 ? false : true;
  });
};

//write comment with writer + content
function writeComment() {
  let writer = username;
  writearr.forEach((element, idx) => {
    var comment = `<span><b>${writer} </b>${element.value}</span><br>`;
    if (element.value) {
      commentArea[idx].innerHTML += comment;
      element.value = " ";
    }
  });
}

/**
 * recognize if keycode is Enter or not, (if enter)=> the comment going to display.
 * (else) when the user writes, the comment button gonna active
 */
for (let element of write) {
  element.addEventListener("keyup", (event) => {
    event.code==="Enter"?writeComment():comment();
  });
}

//add event to "게시" button
for (let element of commentBtn) {
  element.addEventListener("click", writeComment);
}
