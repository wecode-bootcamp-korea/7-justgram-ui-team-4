const $button = document.querySelectorAll(".pidComment_input_button");
const $input = document.querySelectorAll(".pidComment_input_input");
const $visit = document.querySelectorAll(".pidComment_visit");

function deleteBtnClick(event) {
  event.target.parentElement.remove();
}

function clickBtn(event, content, writer, index) {
  event.preventDefault();
  const div = document.createElement("div");
  div.classList = "comment";
  div.innerHTML = `<span><b>${writer}</b> ${content}</span>`;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  deleteBtn.addEventListener("click", deleteBtnClick);
  div.append(deleteBtn);
  $visit[index].append(div);
  div.scrollIntoView({ behavior: "smooth", block: "center" });
  $input[index].value = "";
}

$button.forEach((item, index) => {
  item.addEventListener("click", function (event) {
    clickBtn(event, $input[index].value, "yopi27", index);
  });
});
