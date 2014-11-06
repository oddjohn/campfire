var mGame;

requirejs.config({
	baseUrl: "scripts",
	paths: {
		'jquery': 'jquery-1.11.1.min',
		'awt': '../campfire-framework/awt'
	}
});

var init = function(Game) {
	mGame = new Game();
	mGame.init();
}

if(typeof global != 'undefined') {
	define(["Game"], init);
	var gui = require('nw.gui');
	var win = gui.Window.get();
	window.onkeydown = function(event) {
		switch (event.keyIdentifier) {
			case 'F5':
				win.reload(); break;
			case 'F11':
				win.toggleFullscreen(); break;
			case 'F12':
				if (!win.isDevToolsOpen()) win.showDevTools();
				else win.closeDevTools(); break;
			default:
				break;
		}
	}
	win.show();
} else {
	require(["Game"], init);
}
