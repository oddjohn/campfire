define(function(require, exports, module) {
	var $ = require("jquery");
	var KeyEvent = require("awt/KeyEvent");
	var Ellipse = require("awt/Ellipse");
	var Circle = require("awt/Circle");

	function Game() {
		var self = this;
	   	self.stage = {};
	    self.scean = {};
	    self.graphics = {};

	    self.update = function () {
	    	self.render();
	    };

	    self.render = function() {
	    	$(self.scean).attr({
	    		width: window.innerWidth,
	    		height: window.innerHeight
	    	});
	    };
		Game.prototype.speed = 50;

		Game.prototype.init = function () {
			$(window)
				.on({
					keypress: function(evt) {handleKeyEvent(evt);},
					contextmenu: function(evt) {evt.preventDefault();}
				});
			var scean = $("<canvas></canvas>")
				.attr({
					id: "scean",
					width: window.innerWidth,
					height: window.innerHeight
				});
			var stage = $("<div></div>")
				.attr('id', "stage")
				.css({
					width: '100%',
					height: '100%',
					position: 'absolute',
					overflow: 'hidden',
					backgroundColor: 'black'
				})
				.append(scean);
			$('body').append(stage);
			self.stage = stage.get(0);
			self.scean = scean.get(0);
	    	self.graphics = self.scean.getContext("2d");
			self.interval = setInterval(self.update, Game.speed);
		};
	}

	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			case KeyEvent.KEY_A:
				break;
			default:
				break;
		}
	}

	module.exports = Game;
})