const $form = document.querySelector(".pidComment_input");
const $button = document.querySelectorAll(".pidComment_input_button");
const $input = document.querySelectorAll(".pidComment_input_input");
const $visit = document.querySelectorAll(".pidComment_visit");

function clickBtn(event, content, writer, index) {
  event.preventDefault();
  const div = document.createElement("div");
  div.innerHTML = `<span><b>${writer}</b> ${content}</span>`;
  $visit[index].append(div);
  div.scrollIntoView({ behavior: "smooth", block: "center" });
  $input[index].value = "";
}

$button.forEach((item, index) => {
  console.log(index);
  item.addEventListener("click", function (event) {
    clickBtn(event, $input[index].value, "yopi27", index);
  });
});
