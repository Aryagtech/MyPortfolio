// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Certificate Image Zoom
const certImages = document.querySelectorAll(".cert-img");
const popup = document.getElementById("img-popup");
const popupImg = document.getElementById("popup-img");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

// Close popup when clicking outside image
popup.addEventListener("click", (e) => {
  if (e.target !== popupImg) {
    popup.style.display = "none";
  }
});

// Close popup on ESC key
document.addEventListener('keydown', (e) => {
  if(e.key === "Escape") popup.style.display = "none";
});

// Theme Toggle with persistence
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
