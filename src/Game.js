define(function(require, exports, module) {
	var $ = require('jquery'),
		Stage = require('awt/Stage'),
		self;
	function Game() {
		self = this;
		self.stage = {};
		self.graphics = {};
		$(window).on({
			keypress: function(evt) {handleKeyEvent(evt);},
			contextmenu: function(evt) {evt.preventDefault();}
		});
		self.stage = new Stage($('#stage'));
		self.graphics = self.stage.graphics;
		self.interval = setInterval(self.update, self.speed);
	}
	Game.prototype.update = function () {
		self.render();
	};
	Game.prototype.speed = 50;
	Game.prototype.render = function() {
		self.stage.clear();
	};
	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}
	module.exports = Game;
});
