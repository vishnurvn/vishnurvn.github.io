sidePaneButton = document.getElementById("toggle-side-pane-button");
sidePane = document.getElementById("side-pane");
mainContent = document.getElementById("main-content");
content = document.getElementById("content");

navAnchors = document.querySelectorAll("#side-pane > ul > li > a");

sidePaneButton.addEventListener("click", () => {
	sidePane.classList.toggle("toggle-side-pane");
	mainContent.classList.toggle("move-main-content");
	content.classList.toggle("display-content");

    if (sidePaneButton.innerHTML == "View Profile") {
        sidePaneButton.innerHTML = "Hide Profile"
    } else {
        sidePaneButton.innerHTML = "View Profile"
    }
})