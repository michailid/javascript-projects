function startChat() {
    document.getElementById("chat-btn").style.display = "none";
    document.getElementById("chat-box-container").style.display = "flex";
}

function closeChat() {
    document.getElementById("chat-box-container").style.display = "none";
    document.getElementById("chat-btn").style.display = "block";
}