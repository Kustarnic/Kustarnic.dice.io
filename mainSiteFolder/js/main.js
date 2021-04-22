diceState = 0;

function genAndDisplay() {
	diceState = Math.floor((Math.random() * 6) + 1);

	if (diceState === 1) {
		document.getElementById("result").innerHTML = "1<br>⚀"
	}
	if (diceState === 2) {
		document.getElementById("result").innerHTML = "2<br>⚁"
	}
	if (diceState === 3) {
		document.getElementById("result").innerHTML = "3<br>⚂"
	}
	if (diceState === 4) {
		document.getElementById("result").innerHTML = "4<br>⚃"
	}
	if (diceState === 5) {
		document.getElementById("result").innerHTML = "5<br>⚄"
	}
	if (diceState === 6) {
		document.getElementById("result").innerHTML = "6<br>⚅"
	}
}