/**
 * Module Container
 * @module awt/Container
 */
define(['/Component'], function(Component) {
	return Component.extend({
		_graphics: {},
		add: function (sprite) {
			sprite._graphics = this._graphics;
		}
	});
});