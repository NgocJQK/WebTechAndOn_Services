function showTab(tabId, tabContainer, display) {
    let x = document.getElementsByClassName(tabContainer);
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = display;
    // document.getElementById("console").innerText += "click";
}