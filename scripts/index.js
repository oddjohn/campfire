requirejs.config({
	baseUrl: "scripts",
	paths: {
		'jquery': 'jquery-1.11.1.min',
		'awt': '../campfire-framework/awt'
	}
});

var mGame;

require(["Game"], function(Game) {
	mGame = new Game();
	mGame.init();
});