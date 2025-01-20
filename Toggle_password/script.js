let toggle = document.querySelector("#show-password");
let password = document.querySelector("#password");

toggle.addEventListener("click", function () {
  // If the toggle is checked, change the type to "text"
  // Otherwise, change it back to "password"
  if (toggle.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
