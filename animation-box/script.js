function moveBox() {
    let box = document.getElementById("animated-box");
    let motion = setInterval(frame, 10);
    let pos = 0;
    function frame() {
        if (pos == 440) {
            clearInterval(motion);
        } else {
            pos++;
            box.style.top = pos + "px";
            box.style.right = pos + "px"
        }
    }
} 