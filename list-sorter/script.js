function sortList() {
    let list, i, switchText, s, shouldSwitch;
    list = document.getElementById("item-list");
    switchText = true;
    while (switchText) {
        switchText = false;
        s = list.getElementsByTagName("LI");
        for (i = 0; i < s.length - 1; i++) {
            shouldSwitch = false;
            if (s[i].innerHTML.toLowerCase() > s[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            s[i].parentNode.insertBefore(s[i + 1], s[i]);
        }
    }
}