const commentWriteInput = document.getElementsByClassName("recommentInput");
const commentWriteButton = document.getElementsByClassName("recommentInputBtn");
const commentList = document.getElementsByClassName("writtenRecomment");

Array.from(commentWriteButton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentWriteInput[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "수호 : ";

    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});

Array.from(commentWriteInput).forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      const content = commentWriteInput[index].value;

      const childElem = document.createElement("div");

      const nameSpan = document.createElement("span");
      nameSpan.className = "comment-name";
      nameSpan.textContent = "수호 : ";

      childElem.append(nameSpan, content);

      commentList[index].appendChild(childElem);
    }
  });
});
