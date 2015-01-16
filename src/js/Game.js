define(['jquery', 'awt/Stage', 'awt/Circle', 'lang/Node'], function($, Stage, Circle, Node) {
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
			this.clean();
			this.render();
		},
		render: function () {
			this.__circle__.update();
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
			$('div#content').append($('<div></div>').attr('id', 'stage'));
			this.__stage__ = new Stage('#stage');
			this.__graphics__ = this.__stage__.graphics();
			this.__circle__ = new Circle(0, 0, 50);
			this.__circle__.fillColor('#333');
			this.__stage__.add(this.__circle__);
			this.__interval__ = setInterval(this.update.bind(this), this.__speed__);
		},
		pause: function() {
			clearInterval(this.__interval__);
		},
		resume: function() {
			this.__interval__ = setInterval(this.update.bind(this), this.__speed__);
		},
		clean: function() {
			this.__stage__.scene().attr({
				width: this.__stage__.width(),
				height: this.__stage__.height()
			});
		},
		handleKeyEvent: handleKeyEvent
	});
});