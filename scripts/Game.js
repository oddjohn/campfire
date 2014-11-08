define(function(require, exports, module) {
	var $ = require('jquery');
	var Stage = require('awt/Stage');
	var Ellipse = require('awt/Ellipse');
	function Game() {
		var _ = this;
		_.stage = {};
		_.graphics = {};
		_.update = function () {
			if(_.x>60) _.x=1;
			else _.x++;
			_.render();
		};
		_.render = function() {
			$(_.stage.scene).attr({
				width: _.stage.width(),
				height: _.stage.height()
			});
		};
		Game.prototype.init = function () {
			$(window).on({
					keypress: function(evt) {handleKeyEvent(evt);},
					contextmenu: function(evt) {evt.preventDefault();}
				});
			_.stage = new Stage($('#stage'));
			_.graphics = _.stage.graphics;
			_.interval = setInterval(_.update, Game.speed);
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
});
