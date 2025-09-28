const toggleGuides = document.getElementById("toggleGuides");
const guidesMenu = document.getElementById("guidesMenu");
const toggleTheme = document.getElementById("toggleTheme");

if (localStorage.getItem("theme") === "dark") {
  	document.body.classList.add("dark");
    toggleTheme.textContent = "🌙";
}



toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
    	toggleTheme.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        toggleTheme.textContent = "☀️";
        localStorage.setItem("theme", "light");
    }
});

toggleGuides.addEventListener("click", () => {
    guidesMenu.classList.toggle("active");
});

const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
	header.addEventListener("click", () => {
    	const content = header.nextElementSibling;
    	const isOpen = content.style.display === "flex";
    	content.style.display = isOpen ? "none" : "flex";
    	header.classList.toggle("active", !isOpen);
	});
});

const galleryImages = document.querySelectorAll(".gallery-content img");  

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
lightbox.innerHTML = '<img src="" alt="fullscreen">';
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

galleryImages.forEach(img => {
    img.addEventListener("click", e => {
    	e.preventDefault();
    	lightbox.style.display = "flex";
    	lightboxImg.src = img.src;
	});
});

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      	lightbox.style.display = "none";
      	lightboxImg.src = "";
    }
});
