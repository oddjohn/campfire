requirejs.config({
	"baseUrl": "scripts",
	paths: {
		jquery: 'jquery-1.11.1.min'
	}
});

if (typeof require != 'undefined') {
	var gui = require(['nw.gui']);
	var win = gui.Window.get();
	var stage, ctx;

	define(["jquery"], function($) {
		$(document).ready(function() {
			win.setResizable(false);
			win.show();
			ctx = $('#stage').get(0).getContext('2d');
			var temp = ctx.fillStyle;
			ctx.fillStyle='#000';
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
			ctx.fillStyle = temp;
		});
	});
}