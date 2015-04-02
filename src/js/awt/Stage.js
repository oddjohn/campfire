/**
 * Module Stage
 * @module awt/Stage
 */
define(['jquery', 'awt/Container'], function ($, Container) {
    "use strict";
    return Container.extend({
        constructor: function (container) {
            this.__stage = typeof container == 'string' ? $(container) : container;
            this.__childs = [];
            this.__scene = $('<canvas>')
                .attr({
                    id: this.__stage.attr('id') + '-canvas',
                    width: this.__stage.width(),
                    height: this.__stage.height()
                });
            this.__stage
                .html(this.__scene);
            this._graphics = this.__scene.get(0).getContext('2d');
            // this._graphics = this.__scene.get(0).getContext('experimental-webgl');
        }, width: function () {
            return this.__stage.width();
        }, height: function () {
            return this.__stage.height();
        }, add: function (child) {
            child.graphics(this._graphics);
            this.__childs.push(child);
        }, remove: function (child) {
            // TODO: remove from a list
        }, graphics: function () {
            return this._graphics;
        }, clear: function () {
            this._graphics.globalCompositeOperation = 'source-over';
            this.__scene.attr({
                width: this.width(),
                height: this.height()
            });
            this._graphics.globalCompositeOperation = 'lighter';
        }, update: function () {
            var index = this.__childs.length;
            while (index--) {
                this.__childs[index].update();
            }
        }
    });
});