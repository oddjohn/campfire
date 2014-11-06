define(function(require, exports, module) {
	var $ = require("jquery");
	var KeyEvent = require("awt/KeyEvent");
	var Ellipse = require("awt/Ellipse");

	function Game() {
		var self = this;
	   	self.stage = {};
	    self.scean = {};
	    self.ctx = {};
	    self.x = 0;
	    self.update = function () {
	    	self.x++;
	    	if(self.x>window.innerWidth) self.x=0;
	    	self.render();
	    };
	    self.render = function() {
	    	ctx = self.scean.getContext("2d");
	    	self.scean.width = self.scean.width;
	    	ctx.fillColor='#FFF';
	    	ctx.fillRect(self.x,0,window.innerWidth,50);
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
					overflow: 'hidden'
				})
				.append(scean);
			$('body').append(stage);
			self.stage = stage.get(0);
			self.scean = scean.get(0);
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