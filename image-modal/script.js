let modal = document.getElementById("modal-container");
let img = document.getElementById("image");
let modalImg = document.getElementById("modal-image");
let text = document.getElementById("description");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    text.innerHTML = this.alt;
}
let span = document.getElementById("close-btn");
span.onclick = function() {
    modal.style.display = "none";
}