define(function(require, exports, module) {
	"use strict";
	var $ = require('jquery');
	var Stage = require('awt/Stage');
	var Backbone = require('Backbone');

	var Game = Backbone.Model.extend({
		__stage: {},
		__graphics: {},
		__speed: 10000,
		constructor: function() {
			Backbone.Model.apply(this, arguments);
		},
		start: function () {
			self.init();
		},
		update: function () {
			self.render();
		},
		render: function() {
			$(this.__stage.scene).attr({
				width: this.__stage.width(),
				height: this.__stage.height()
			});
		},
		init: function () {
			var self = this;
			$(window).on({
				keypress: function(evt) {self.handleKeyEvent(evt);},
				contextmenu: function(evt) {evt.preventDefault();}
			});
			self.__stage = new Stage($('#stage'));
			self.__graphics = self.__stage.graphics;
			self.__interval = setInterval(self.update, Game.speed);
		},
		handleKeyEvent: handleKeyEvent
	});
	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}
	module.exports = Game;
});
