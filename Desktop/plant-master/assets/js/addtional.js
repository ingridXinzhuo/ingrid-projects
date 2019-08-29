/*
popup
*/
document.getElementById('register_btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('submit_btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

/*

document.getElementById('login_btn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});
*/