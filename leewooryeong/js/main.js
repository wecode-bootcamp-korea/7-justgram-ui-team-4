let writeComment = document.getElementsByClassName("write")[0];
let submitBtn = document.getElementsByClassName("submit")[0];

function newComment() {
    let commentBox = document.getElementsByClassName("new__comment")[0];

    const comments = document.createElement("div");
    const userName = document.createElement("span");
    const commentText = document.createElement("p");

    comments.classList.add("new__comment");
    userName.classList.add("userName");
    commentText.classList.add("moreComments");

    userName.innerHTML = "newnew";
    commentText.innerText = writeComment.value;

    comments.appendChild(userName);
    comments.appendChild(commentText);
    commentBox.appendChild(comments);
}

submitBtn.addEventListener("click", (event) => {
    newComment();
    writeComment.value = "";
});

writeComment.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        newComment();
        writeComment.value = "";
    }
});
