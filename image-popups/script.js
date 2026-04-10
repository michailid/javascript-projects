function showNewPopup() {
    const img = document.createElement("img");
    img.src = "images/star.png";
    img.alt = "star";
    img.classList.add("image-popup");
    let container = document.getElementById("container");
    container.appendChild(img);
    setTimeout(() => {
        img.remove();
    }, 5000);
}