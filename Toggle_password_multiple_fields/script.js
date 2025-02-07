let toggle = document.querySelector("#show-passwords");
let passwords = document.querySelectorAll('[type="password"]');

toggle.addEventListener("click", () => {
  for (let password of passwords) {
    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (toggle.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});
