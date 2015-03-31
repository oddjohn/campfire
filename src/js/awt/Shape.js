define(['lang/Class'], function(Class) {
	"use strict";
	return Class.extend({
		constructor: function (x, y, width, height) {
			this._x = x || 0;
			this._y = y || 0;
			this._width = width || 0;
			this._height = height || 0;
			this._graphics = null;
			this._fillColor = 'black';
			this._strokeColor = 'black';
		},
		width: function () {
			return this._width;
		},
		height: function () {
			return this._height;
		},
		x: function () {
			return this._x;
		},
		y: function () {
			return this._y;
		},
		update: function () {
			this.draw(this._graphics);
		},
		graphics: function (graphics) {
			return (this._graphics = graphics || this._graphics);
		},
		fillColor: function (color) {
			return (this._fillColor = color || this._fillColor);
		},
		strokeColor: function (color) {
			return (this._strokeColor = color || this._strokeColor);
		},
		contains: function () {},
		intersects: function() {},
		draw: function (graphics) {}
	});
});