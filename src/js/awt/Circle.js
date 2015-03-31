/**
 * @module awt/Circle
 */
define(['awt/Ellipse'], function(Ellipse) {
	"use strict";
	return Ellipse.extend({
		constructor: function(x, y, radius) {
			this._radius = radius;
			Ellipse.prototype.constructor.call(this, x, y, radius * 2, radius * 2);
		},
		draw: function (graphics) {
			var tmpFillStyle = graphics.fillStyle;
			var tmpStrokeStyle = graphics.strokeStyle;
			graphics.fillStyle = this._fillColor;
			graphics.strokeStyle = this._strokeColor;
			graphics.beginPath();
			graphics.arc(this._x, this._y, this._radius, 0, Math.PI * 2, true);
			graphics.closePath();
			graphics.fill();
			graphics.fillStyle = tmpFillStyle;
			graphics.strokeStyle = tmpStrokeStyle;
		},
		radius: function (value) {
			this._radius = value || this._radius;
			this._width = this._radius * 2;
			this._height = this._radius * 2;
			return this._radius;
		}
	});
});