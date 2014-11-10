define(function(require, exports, module) {
	var $ = require('jquery');
	var Stage = require('awt/Stage');
	var _;

	function Game() {
		_ = this;
		_.stage = {};
		_.graphics = {};
		_.init();
	}
	Game.prototype.update = function () {
		_.render();
	};
	Game.prototype.speed = 10000;
	Game.prototype.render = function() {
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
	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}
	module.exports = Game;
});
