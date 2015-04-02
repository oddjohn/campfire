define(['awt/Component'], function (Component) {
    "use strict";
    /**
     *
     */
    return Component.extend({
        _text: '',
        getText: function () {
            return this._text;
        }
    });
});