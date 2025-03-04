// Get the elements
let text = document.querySelector("#text");
let charCount = document.querySelector("#character-count");

// Listen for changes to the text area content
text.addEventListener("input", function() {
  // Display the characters count
  charCount.textContent = text.value.length;
});
