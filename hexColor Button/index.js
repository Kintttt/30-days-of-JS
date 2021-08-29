let firstBox = document.getElementById("firstBox")
let secondBox = document.getElementById("secondBox")
let thirdBox = document.getElementById("thirdBox")
let btn = document.getElementById("btn")
let colors = document.getElementById("colors")

btn.addEventListener("click", function(){
  let allColors = "rgb(" + firstBox.value + ", " + secondBox.value + ", " + thirdBox.value + ")"
  document.body.style.backgroundColor = allColors
  colors.innerHTML = "This background has a color of " + allColors
  
  if(0 > firstBox.value || firstBox.value > 255 || 0 > secondBox.value || secondBox.value > 255 || 0 > thirdBox.value || thirdBox.value > 255){
    alert("Number is invalid. Select a number btwn 0 & 255 ONLY, please")
  }      
})