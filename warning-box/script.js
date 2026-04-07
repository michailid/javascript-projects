function showWarning() {
    let viewWarningButton = document.getElementById("warning-btn");
    viewWarningButton.style.display = "none";
    let warningContainer = document.getElementById("warning-container");
    warningContainer.style.display = "block";
}

function hideWarning() {
    let warningContainer = document.getElementById("warning-container");
    warningContainer.style.display = "none";
    let viewWarningButton = document.getElementById("warning-btn");
    viewWarningButton.style.display = "block";
}