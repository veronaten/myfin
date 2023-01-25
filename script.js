// Get the container element
var LiContainer = document.getElementById("wrapperUl");

// Get all buttons with class="btn" inside the container
var liElements = LiContainer.getElementsByClassName("li-element");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
