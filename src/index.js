requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: '../libs/zepto.min',
		underscore: '../libs/underscore-min',
		backbone: '../libs/backbone-min'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	},
	waitSeconds: 15
})(['backbone'], function(Backbone) {
	if(typeof global != 'undefined') {
		define(['Game', 'awt/KeyEvent'], function(Game, KeyEvent) {
			new Game();
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
		requirejs(['Game'], function(Game) {
			new Game();
		});
	}
});
