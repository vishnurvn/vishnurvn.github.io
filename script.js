sidePaneButton = document.getElementById("toggle-side-pane-button");
sidePane = document.getElementById("side-pane");
mainContent = document.getElementById("main-content");
content = document.getElementById("content");

sidePaneButton.addEventListener("click", () => {
	sidePane.classList.toggle("toggle-side-pane");
	mainContent.classList.toggle("move-main-content");
	content.classList.toggle("display-content");
})