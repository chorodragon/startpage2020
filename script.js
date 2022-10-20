window.onload = function() {
document.getElementById("searchTerm").addEventListener("keyup", function(event) {
	if (event.keyCode == 13) {
		window.open("https://www.startpage.com/do/dsearch?query=" + document.getElementById("searchTerm").value);
		document.getElementById("searchTerm").value = "";
	}
});
document.cookie = encodeURIComponent("name") + '=' + encodeURIComponent("value");

alert(document.cookie); // show all cookies

};


function updateTime() {
	let dt = new Date();
	let hours = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
	let minutes = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
	let seconds = dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds();
	document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTime, 3000);


