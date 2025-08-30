console.log("Script Running")

// ✅ Sidebar toggle
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo')
  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
  }
  else {
    document.querySelector('.ham').style.display = 'none'
    setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline'
    }, 150);
  }
})

// ✅ Dark/Light Theme Toggle (default = Dark)
const toggleBtn = document.getElementById("theme-toggle");

// Always start in dark mode
document.body.classList.add("dark");
toggleBtn.textContent = "☀️ Light Mode";

// If user had saved a choice before, load it
if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("dark");
  toggleBtn.textContent = "🌙 Dark Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
