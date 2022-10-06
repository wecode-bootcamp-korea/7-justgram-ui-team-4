const $form = document.querySelector("#pidComment_input");
const $button = document.querySelector("#pidComment_input_button");
const $input = document.querySelector("#pidComment_input_input");
const $visit = document.querySelector("#pidComment_visit");

function clickBtn(event, content, writer) {
  event.preventDefault();
  console.log("test");
  const div = document.createElement("div");
  div.innerHTML = `<span><b>${writer}</b> ${content}</span>`;
  $visit.append(div);
  div.scrollIntoView({ behavior: "smooth", block: "center" });
}

$button.addEventListener("click", function (event) {
  clickBtn(event, $input.value, "yopi27");
});
