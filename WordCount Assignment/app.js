let wordCount = document.getElementById("wordCount")
let button = document.getElementById("button")
let numbers = document.getElementById("numbers")

button.addEventListener("click", function(){
  let arr = wordCount.value.split(" ")
  arr = arr.filter(val => !!val)
  numbers.innerHTML = arr.length + " word"
  if (arr.length > 1) {
  numbers.innerHTML = arr.length + " words"
   };
})

