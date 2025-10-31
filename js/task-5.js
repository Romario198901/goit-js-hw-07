function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  body: document.querySelector("body"),
  currentColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};
refs.buttonChangeColor.addEventListener("click", handleButtonClicked);
function handleButtonClicked() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.currentColor.textContent = refs.body.style.backgroundColor;
  return refs.currentColor.textContent;
}
