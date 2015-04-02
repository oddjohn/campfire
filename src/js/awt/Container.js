/**
 * Module Container
 * @module awt/Container
 */
define(['awt/Component'], function (Component) {
    return Component.extend({
        _graphics: {},
        add: function (sprite) {
            sprite._graphics = this._graphics;
        }
    });
});