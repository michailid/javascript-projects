const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
const penWidthLabel = document.getElementById("pen-width-label");
penWidthLabel.innerHTML = ctx.lineWidth;
ctx.lineJoin = "round";
ctx.lineCap = "round";
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});
canvas.addEventListener('mouseup',    () => isDrawing = false);
canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
});

// button event listeners
const decreaserBtn = document.getElementById("pen-decreaser-btn");
decreaserBtn.addEventListener("click", () => {
    if (ctx.lineWidth > 1) {
        ctx.lineWidth -= 1;
    }
    penWidthLabel.innerHTML = ctx.lineWidth;
});
const increaserBtn = document.getElementById("pen-increaser-btn");
increaserBtn.addEventListener("click", () => {
    ctx.lineWidth += 1;
    penWidthLabel.innerHTML = ctx.lineWidth;
});
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", (e) => {
    ctx.strokeStyle = e.target.value;
});