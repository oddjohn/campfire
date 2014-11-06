var mGame;

requirejs.config({
	baseUrl: "scripts",
	paths: {
		'jquery': 'jquery-1.11.1.min',
		'awt': '../campfire-framework/awt'
	}
});

function init(Game) {
	mGame = new Game();
	mGame.init();
}

if(typeof global != 'undefined') {
	define(["Game"], init);
	require('nw.gui').Window.get().show();
} else {
	require(["Game"], init);
}