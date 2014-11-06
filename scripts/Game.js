define(function(require, exports, module) {
	
	var $ = require("jquery");
	var Stage = require("awt/Stage");
	var Ellipse = require("awt/Ellipse");

	function Game() {
		var self = this;
		self.stage = {};
		self.graphics = {};

		self.update = function () {
			if(self.x>60) self.x=1;
			else self.x++;
			self.render();
		};

		self.render = function() {
			$(self.stage.scene).attr({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		Game.prototype.init = function () {
			$(window).on({
					keypress: function(evt) {handleKeyEvent(evt);},
					contextmenu: function(evt) {evt.preventDefault();}
				});

			self.stage = new Stage('stage', $('body'));
			self.graphics = self.stage.graphics;

			self.interval = setInterval(self.update, Game.speed);
		};
	}
	
	Game.prototype.speed = 50;

	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}

	module.exports = Game;
})