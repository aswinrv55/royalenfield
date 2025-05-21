const toggle = document.getElementById("themeToggle");
const body = document.body;

// Check saved preference
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggle.checked = true;
}

// Toggle theme
toggle.addEventListener("change", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
