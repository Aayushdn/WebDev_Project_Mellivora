const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const overlay = box.querySelector(".overlay");

  box.addEventListener("mouseenter", () => {
    if (overlay) overlay.classList.add("hidden");
    box.style.flexGrow = "3";
  });

  box.addEventListener("mouseleave", () => {
    if (overlay) overlay.classList.remove("hidden");
    box.style.flexGrow = "1";
  });
});
