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
		__speed: 30,
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
			this.__stage.update();
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
			this.__circle = new Circle(this.__stage.width() / 2, this.__stage.height()/2, 50);
			this.__circle.fillColor('#222');
            this.__circle_outer = new Circle(this.__stage.width() / 2, this.__stage.height()/2, 70);
            this.__circle_outer.fillColor('lightgreen');
			this.__stage.add(this.__circle);
			this.__stage.add(this.__circle_outer);
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