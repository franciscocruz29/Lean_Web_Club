// Get the text area, and word and character count elements
let text = document.querySelector('#text')
let wordCount = document.querySelector('#word-count')
let charCount = document.querySelector('#character-count')

// Listen for changes to the text area content 
text.addEventListener('input', function() {

  // Get the word count 
  let words = text.value.split(/[\s]+/g).filter(function(word) {
    return word.length
  })

  // Display the word count
  wordCount.textContent = words.length

  // Display the characters count
  charCount.textContent = text.value.length
})
