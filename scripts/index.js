requirejs.config({
	baseUrl: 'scripts',
	paths: {
		'jquery': 'jquery-1.11.1.min',
		'awt': '../campfire-framework/awt'
	}
});
var init = function(Game) {
	new Game().init();
};
if(typeof global != 'undefined') {
	define(['Game', 'awt/KeyEvent'], function(Game, KeyEvent) {
		init(Game);
		var gui = require('nw.gui');
		var win = gui.Window.get();
		window.onkeydown = function(event) {
			switch (event.keyCode) {
				case KeyEvent.KEY_F5:
					win.reload(); break;
				case KeyEvent.KEY_F11:
					win.toggleFullscreen(); break;
				case KeyEvent.KEY_F12:
					if (!win.isDevToolsOpen()) win.showDevTools();
					else win.closeDevTools(); break;
				default:
					break;
			}
		};
		win.show();
	});
} else {
	require(['Game'], init);
}
