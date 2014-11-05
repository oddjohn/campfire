var gui = require('nw.gui');
var win = gui.Window.get();
var stage, ctx;
$(document).ready(function() {
	win.show();
	stage = $('#stage').get(0);
	ctx = stage.getContext('2d');
	var temp = ctx.fillStyle;
	ctx.fillStyle='#000';
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	ctx.fillStyle = temp;
});