"use strict";

var randomcolor;

function tlencolor() {
	randomcolor="#"+((1<<24)*Math.random()|0).toString(16);
	document.querySelector(".tlen").style.color = randomcolor;
};

setInterval(tlencolor, 250);