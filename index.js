const modeToggle = document.getElementById("mode-toggle");
const content = document.getElementById("body");

modeToggle.addEventListener("click", () => {
  if (content.classList.contains("dark-mode")) {
    content.classList.remove("dark-mode");
    modeToggle.textContent = "Day";
  } else {
    content.classList.add("dark-mode");
    modeToggle.textContent = "Night";
  }
});
