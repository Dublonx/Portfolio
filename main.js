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

