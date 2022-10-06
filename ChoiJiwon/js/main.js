const commentBtn = document.getElementsByClassName("c-submit");
const commentArea = document.getElementsByClassName("comment");
const noOfCommentArea = document.getElementsByClassName("f-numOfcomment");
const write = document.getElementsByClassName("write");
let username = window.localStorage.getItem("user");
const btnarr = Array.from(commentBtn);
const writearr = Array.from(write);
//button activation
const comment = () => {
  btnarr.forEach((element, idx) => {
    element.disabled = write[idx].value && 1 ? false : true;
  });
};

//write comment with writer + content
//if(comment>2) print "댓글 n개 모두 보기" 
function writeComment() {
  let writer = username;
  writearr.forEach((element, idx) => {
    let numOfComment = commentArea[idx].getElementsByTagName("span").length;
    var comment = `<span><b>${writer} </b>${element.value}</span>`;
    if (element.value) {
      if (numOfComment < 2) {
        commentArea[idx].innerHTML += comment;
        element.value = "";
      } else{
        let allcomment = Array.from(
          commentArea[idx].getElementsByTagName("span")
        );
        allcomment.forEach((element, idx) => {
          if (idx < allcomment.length - 1) {
            element.style.display = "none";
          }
        });
        commentArea[idx].innerHTML += comment;
        let numComment = `<a href="#">댓글 ${numOfComment + 1}개 모두 보기</a>`;
        noOfCommentArea[idx].innerHTML = numComment;
        element.value = "";
      }
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
