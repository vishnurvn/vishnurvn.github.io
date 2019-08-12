let profileButton = document.getElementById("view-profile-btn")
let frontPane = document.getElementById("front-pane");
let sidePane = document.getElementById("side-pane");
let mainContent = document.getElementById("main-content");

profileButton.addEventListener('click', () => {
	if (profileButton.innerHTML == 'View Profile') {
		profileButton.innerHTML = 'Hide Profile';
	} else {
		profileButton.innerHTML = 'View Profile'
	}
	frontPane.classList.toggle('move-front-pane');
	sidePane.classList.toggle('display-pane');
	mainContent.classList.toggle('display-main-content');
})