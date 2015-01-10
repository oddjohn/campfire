define(['jquery', 'awt/Stage', 'lang/Node'], function($, Stage, Node) {
	"use strict";
	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}

	return Node.extend({
		__stage: {},
		__graphics: {},
		__speed: 50,
		constructor: function () {
			Node.prototype.constructor.apply(this, arguments);
		},
		start: function () {
			this.init();
		},
		update: function () {
			this.render();
		},
		render: function () {
			$(this.__stage.scene).attr({
				width: this.__stage.width(),
				height: this.__stage.height()
			});
		},
		init: function () {
			$(window).on({
				keypress: function (evt) {
					this.handleKeyEvent(evt);
				},
				contextmenu: function (evt) {
					evt.preventDefault();
				}
			});
			this.__stage = new Stage($('#stage'));
			this.__graphics = this.__stage.graphics;
			this.__interval = setInterval(this.update.bind(this), this.__speed);
		},
		pause: function() {
			clearInterval(this.__interval);
		},
		resume: function() {

		},
		handleKeyEvent: handleKeyEvent
	});
});
