document.getElementById("bg-changer-btn").addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    let red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}