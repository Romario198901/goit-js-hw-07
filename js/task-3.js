const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", handleInputFilled);
function handleInputFilled() {
  if (refs.input.value.trim() === "") {
    refs.output.textContent = "Anonymous";
    return refs.output;
  }
  refs.output.textContent = refs.input.value.trim();
  return refs.output;
}
