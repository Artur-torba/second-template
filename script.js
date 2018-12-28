munu.onclick = function myFunction () {
	var x = document.getElementById('menu');
if (x.className === "header__menu") {
	x.className += " responsive";
}
else{
	x.className = "header__menu";
}
}