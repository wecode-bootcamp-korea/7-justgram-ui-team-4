const commentArea = document.getElementsByClassName("comment");
const noOfCommentArea = document.getElementsByClassName("f-numOfcomment");
const deleteBtn = Array.from(document.getElementsByClassName("c-delete"));
let username = window.localStorage.getItem("user");
const btnArr = Array.from(document.getElementsByClassName("c-submit"));
const writeArr = Array.from(document.getElementsByClassName("write"));

//add EventListener
deleteBtn.forEach((e) => {
  e.addEventListener("click", deleteComment());
});
btnArr.forEach((e) => {
  e.addEventListener("click", writeComment);
});

/**
 * recognize if keycode is Enter or not, if enter=> the comment going to display.
 *else when the user writes, the comment button gonna active
 */
writeArr.forEach((e) =>
  e.addEventListener("keyup", (event) => {
    event.code === "Enter" ? writeComment() : comment();
  })
);

//button activation
const comment = () => {
  btnArr.forEach((element, idx) => {
    element.disabled = writeArr[idx].value && 1 ? false : true;
  });
};

//write comment with writer + content
//if(comment>2) print "댓글 n개 모두 보기"
function writeComment() {
  let writer = username;
  writeArr.forEach((element, idx) => {
    let numOfComment = commentArea[idx].getElementsByTagName("span").length;
    const newDiv = document.createElement("div");
    newDiv.className = "oneComment";
    newDiv.innerHTML = `<span><b>${writer} </b>${element.value}</span>`;
    newDiv.innerHTML += `<img alt="heart" class="c-icon c-heart" src="image/heart.png">`;
    newDiv.innerHTML += `<img alt="delete" class="c-icon c-delete" src="image/delete.png">`;
    if (element.value) {
      if (numOfComment < 2) {
        commentArea[idx].appendChild(newDiv);
        element.value = "";
      } else {
        let allComment = Array.from(
          commentArea[idx].getElementsByClassName("oneComment")
        );
        allComment.forEach((element, idx) => {
          if (idx < allComment.length - 1) {
            element.style.display = "none";
          }
        });
        commentArea[idx].appendChild(newDiv);
        let numComment = `<a href="#">댓글 ${numOfComment + 1}개 모두 보기</a>`;
        noOfCommentArea[idx].innerHTML = numComment;
        element.value = "";
      }
      //add event listener to new elements
      for (let element of deleteBtn) {
        element.addEventListener("click", deleteComment);
      }
    }
  });
}

function deleteComment() {
  console.log("delete");
}
