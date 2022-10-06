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

//키보드 칠때 게시 글씨 활성화 되게
for (let element of write) {
  element.addEventListener("keyup", comment);
}


//enter 치고 넘어가게 

//클릭 하면 댓글 써지게 => 콜백 함수 따로 떼기 
for (let element of commentBtn) {
  element.addEventListener("click", (content, writer) => {
    writer = username;
    writearr.forEach((element, idx) => {
      var comment = `<span><b>${writer} </b>${element.value}</span><br>`;
      if (element.value) {
        content = element.value;
        commentArea[idx].innerHTML += comment;
        element.value=" ";
      }
    });
  });
}
