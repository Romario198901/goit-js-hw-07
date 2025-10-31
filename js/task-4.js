const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    form.elements.email.value.trim() === "" ||
    form.elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }
  const userData = {};
  userData.email = form.elements.email.value.trim();
  userData.password = form.elements.password.value.trim();
  console.log(userData);
  form.reset();
});
