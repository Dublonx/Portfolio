// preview image
const overlay = document.querySelector('#overlay');
const overlayImg = document.querySelector('#overlay img');

document.querySelectorAll('.cert-img').forEach(img => {
    img.onclick = () => {
        overlay.classList.add("active");
        overlayImg.src = img.src;
    };
});

overlay.onclick = () => {
    overlay.classList.remove("active");
};

// light/dark
const toggleBtn = document.querySelector('#toggleBtn');
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // change icon
    if (body.classList.contains("dark-mode")) {
        toggleBtn.className = "fa-solid fa-sun";
    } else {
        toggleBtn.className = "fa-solid fa-moon";
    }
})
