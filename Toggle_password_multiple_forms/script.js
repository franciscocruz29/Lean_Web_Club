// Listen to all click events in the browser
document.addEventListener("click", function (event) {
  // Check if clicked item was a password toggle
  // If not, return and stop running the callback function
  if (!event.target.matches("[data-pw-toggle]")) return;

  // Get the password fields
  let selector = event.target.getAttribute("data-pw-toggle");
  let passwords = document.querySelectorAll(selector);

  // Loop through each password field
  for (let password of passwords) {
    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (event.target.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});
