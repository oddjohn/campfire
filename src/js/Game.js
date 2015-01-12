define(['jquery', 'awt/Stage', 'lang/Node'], function($, Stage, Node) {
	"use strict";
	function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}

	return Node.extend({
		__stage__: {},
		__graphics__: {},
		__speed__: 50,
		start: function () {
			this.init();
		},
		update: function () {
			this.render();
		},
		render: function () {
			$(this.__stage__.scene()).attr({
				width: this.__stage__.width(),
				height: this.__stage__.height()
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
			this.__stage__ = new Stage($('#stage'));
			this.__graphics__ = this.__stage__.graphics();
			this.__interval__ = setInterval(this.update.bind(this), this.__speed__);
		},
		pause: function() {
			clearInterval(this.__interval__);
		},
		resume: function() {

		},
		handleKeyEvent: handleKeyEvent
	});
});
