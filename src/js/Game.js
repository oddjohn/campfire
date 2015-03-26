/**
 * Game Application
 * @module Game
 */
define(['jquery', 'awt/Stage', 'awt/Circle', 'lang/Class'], function($, Stage, Circle, Class) {
    "use strict";
    /**
     * @private
     * @param {Event} evt
     */
    function handleKeyEvent(evt) {
		switch(evt.keyCode) {
			default:
				break;
		}
	}

    /**
     * @param {string} key keyCode of keyboard key.
     * @param {function} callback
     * @returns {void}
     */
    function keyBind(key, callback) {
        // TODO; Complete the method.
    }

	return Class.extend({
        /**
         * @type {Object}
         */
		__stage: {},
        /**
         * @type {Object}
         */
		_graphics: {},
        /**
         * milliseconds per frame last
         * @type {Number}
         */
		__speed: 50,
        /**
         * Start the game.
         */
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
			this.__circle.update();
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
			this.__stage = new Stage('#stage');
			this._graphics = this.__stage.graphics();
			this.__circle = new Circle(0, 0, 50);
			this.__circle.fillColor('#333');
			this.__stage.add(this.__circle);
			this.__interval = setInterval(this.update.bind(this), this.__speed);
		},
        /**
         * pause the game.
         * @returns void
         */
		pause: function() {
			clearInterval(this.__interval);
		},
        /**
         * resume the game when paused.
         * @returns void
         */
		resume: function() {
			this.__interval = setInterval(this.update.bind(this), this.__speed);
		},
        /**
         * clear the game stage
         * @returns void
         */
		clear: function() {
			this.__stage.clear();
		},
		handleKeyEvent: handleKeyEvent
	});
});