function addItem() {
    // var list = document.getElementById("item-list");
    var itemValue = document.getElementById("items-input").value;
    var itemTextNode = document.createTextNode(itemValue);
    var li = document.createElement("li");
    li.appendChild(itemTextNode);

    if (itemValue === " ") {
        alert("You must add shopping list items.");
    } else {
        document.getElementById("item-list").appendChild(li);
    }
    document.getElementById("items-input").value = "";
    
    // add close button to the new element
    var span = document.createElement("SPAN");
    var crossSign = document.createTextNode("\u00D7");
    span.className = "close-btn";
    span.appendChild(crossSign);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }
    
}

var close = document.getElementsByClassName("close-btn");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener('click', ev => {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('done');
    }
})

function removeElement(item) {
    item.style.display = "none";
}