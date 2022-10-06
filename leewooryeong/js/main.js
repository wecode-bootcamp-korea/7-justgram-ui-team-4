const newComment = document.getElementsByClassName("new__comment"); //새로운 댓글자리
const commentBtn = document.getElementsByClassName("submit"); // 버튼
const commentInput = document.getElementsByClassName("write"); // input창

Array.from(commentInput).forEach((value, index) => {
    commentInput[index].addEventListener("keypress", (e) => {
        if (e.keyCode === 13 && commentInput[index].value) {
            const li = document.createElement("li");
            const userName = document.createElement("span");
            const content = document.createElement("p");

            li.classList.add("commentLi");
            userName.innerText = "whoareu";
            content.innerText = commentInput[index].value;

            li.append(userName, content);
            newComment[index].appendChild(li);

            //input 값 리셋 (지우기)
            commentInput[index].value = "";
        }
    });

    commentBtn[index].addEventListener("click", (event) => {
        const li = document.createElement("li");
        const userName = document.createElement("span");
        const content = document.createElement("p");

        li.classList.add("commentLi");
        userName.innerText = "whoareu";
        content.innerText = commentInput[index].value;

        li.append(userName, content);
        newComment[index].appendChild(li);

        commentInput[index].value = "";
    });
});

// 피드가 하나일때만 적용되는 코드

// // 댓글 입력 input창
// let writeComment = document.getElementsByClassName("write")[0];
// // 버튼
// let submitBtn = document.getElementsByClassName("submit")[0];

// function newComment() {
//     // 새로운 댓글이 들어갈 공간
//     let commentBox = document.getElementsByClassName("new__comment")[0];

//     // new__comment 의 자식요소 생성
//     const comments = document.createElement("div");
//     // 닉네임
//     const userName = document.createElement("span");
//     // 댓글 내용
//     const commentText = document.createElement("p");

//     userName.innerText = "newnew";
//     commentText.innerText = writeComment.value;

//     commentBox.appendChild(comments);
//     comments.appendChild(userName);
//     comments.appendChild(commentText);
// }

// submitBtn.addEventListener("click", (event) => {
//     newComment();
//     writeComment.value = "";
// });

// writeComment.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         newComment();
//         writeComment.value = "";
//     }
// });
