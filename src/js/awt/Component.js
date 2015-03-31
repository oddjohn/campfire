/**
 * @module awt/Component
 */
define(['../lang/Class'], function(Class) {
	"use strict";
	return Class.extend({
		constructor: function() {
			this._x = 0;
			this._y = 0;
		}
	});
});