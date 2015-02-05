/**
 * Game Application
 * @module Game
 */
define(['jquery', 'awt/Stage', 'awt/Circle', 'lang/Class'], function($, Stage, Circle, Class) {
    "use strict";
    function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}

	return Class.extend({
		__stage__: {},
		__graphics__: {},
        /**
         * milliseconds per frame last
         * @type {Number}
         */
		__speed__: 50,
		start: function () {
			this.init();
		},
        /**
         * update the game state.
         * @returns void
         */
		update: function () {
			this.clear();
			this.render();
		},
        /**
         * render the stage
         * @returns void
         */
		render: function () {
			this.__circle__.update();
		},
        /**
         * init the game application.
         * @returns void
         */
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
        /**
         * pause the game.
         * @returns void
         */
		pause: function() {
			clearInterval(this.__interval__);
		},
        /**
         * resume the game when paused.
         * @returns void
         */
		resume: function() {
			this.__interval__ = setInterval(this.update.bind(this), this.__speed__);
		},
        /**
         * clear the game stage
         * @returns void
         */
		clear: function() {
			this.__stage__.clear();
		},
		handleKeyEvent: handleKeyEvent
	});
});