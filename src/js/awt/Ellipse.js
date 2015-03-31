define(['/Shape'], function(Shape) {
	"use strict";
	return Shape.extend({
		draw: function (graphics) {
			var k = (this._width / 0.75) / 2,
				w = this._width / 2,
				h = this._height / 2;
			var temp = graphics.strokeStyle;
			graphics.strokeStyle = this._strokeColor;
			graphics.beginPath();
			graphics.moveTo(this._x, this._y - h);
			graphics.bezierCurveTo(this._x + k, this._y - h, this._x + k, this._y + h, this._x, this._y + h);
			graphics.bezierCurveTo(this._x - k, this._y + h, this._x - k, this._y - h, this._x, this._y - h);
			graphics.restore();
			graphics.stroke();
			graphics.closePath();
			graphics.strokeStyle = temp;
		}
	});
});