const destinationContainer = document.querySelector(".container");

console.log(destinationContainer);
destinationContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("overlay")) {
    e.target.classList.add("hidden");
    const closestBox = e.target.closest(".box");
    closestBox.style.flexGrow = "3";
  }
});

destinationContainer.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("overlay")) {
    e.target.classList.remove("hidden");
    const closestBox = e.target.closest(".box");
    closestBox.style.flexGrow = "1";
  }
});
