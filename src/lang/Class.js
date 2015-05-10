define(function (require, exports, module) {
    "use strict";
    var Class = function () {};
    var fnTest = /\b__super\b/;

    /**
     * clone an object
     * @param obj
     * @returns {exports.constructor}
     */
    Class.clone = function (obj) {
        var newObj = (obj.constructor) ? new obj.constructor() : {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var copy = obj[key];
                if (((typeof copy) == 'object') && copy && !(copy instanceof  Class) && !(copy instanceof HTMLElement)) {
                    newObj[key] = Class.clone(copy);
                } else {
                    newObj[key] = copy;
                }
            }
        }
        return newObj;
    };

    Class.defineGetterSetter = function (proto, prop, getter, setter, getterName, setterName) {
        if (proto.__defineGetter__) {
            getter && proto.__defineGetter__(prop, getter);  // jshint ignore: line
            setter && proto.__defineSetter__(prop, setter);  // jshint ignore: line
        } else if (Object.defineProperty) {
            var desc = {enumerable: false, configurable: true};
            getter && (desc.get = getter);  // jshint ignore: line
            setter && (desc.set = setter);  // jshint ignore: line
            Object.defineProperty(proto, prop, desc);
        } else {
            throw new Error("browser does not support getters");
        }

        if (!getterName && !setterName) {
            // Lookup getter/setter function
            var hasGetter = (getter !== null), hasSetter = (typeof setter !== 'undefined'), props = Object.getOwnPropertyNames(proto);
            var length = props.length;
            for (var i = 0; i < length; i++) {
                var name = props[i];
                if ((proto.__lookupGetter__ ? proto.__lookupGetter__(name)
                        : Object.getOwnPropertyDescriptor(proto, name)) || typeof proto[name] !== "function")
                    continue;
                var func = proto[name];
                if (hasGetter && func === getter) {
                    getterName = name;
                    if (!hasSetter || setterName) break;
                }
                if (hasSetter && func === setter) {
                    setterName = name;
                    if (!hasGetter || getterName) break;
                }
            }
        }

        // Found getter/setter
        var constructor = proto.constructor;
        if (getterName) {
            if (!constructor.__getters__) {
                constructor.__getters__ = {};
            }
            constructor.__getters__[getterName] = prop;
        }
        if (setterName) {
            if (!constructor.__setters__) {
                constructor.__setters__ = {};
            }
            constructor.__setters__[setterName] = prop;
        }
    };

    Class.extend = function (protoProps, staticProps) {
        var __super = this.prototype;
        var prototype = Object.create(__super);

        var desc = {writable: true, enumerable: false, configurable: true};

        function SubClass() {
            if (this.constructor && this.constructor != SubClass) {
                this.constructor.apply(this, arguments);
            }
        }

        SubClass.prototype = prototype;

        this.__getters__ && (SubClass.__getters__ = Class.clone(this.__getters__));  // jshint ignore: line
        this.__setters__ && (SubClass.__setters__ = Class.clone(this.__setters__));  // jshint ignore: line

        function _generate_method_value(name, fn) {
            return function () {
                var tmp = this.__super;
                this.__super = __super[name];
                var ret = fn.apply(this, arguments);
                this.__super = tmp;
                return ret;
            };
        }

        function _generate_setters (element, index) {
            if (element == propertyName) {
                setter = index;
                Class.defineGetterSetter(prototype, propertyName, prop[name], prop[setter] ?
                    prop[setter] : prototype[setter], name, setter);
            }
        }

        function _generate_getters (element, index) {
            if (element == propertyName) {
                getter = index;
                Class.defineGetterSetter(prototype, propertyName, prop[getter] ?
                    prop[getter] : prototype[getter], prop[name], getter, name);
            }
        }

        for (var idx = 0, li = arguments.length; idx < li; ++idx) {
            var prop = arguments[idx];
            for (var name in prop) {
                if (prop.hasOwnProperty(name)) {
                    var isFunc = (typeof prop[name] === "function");
                    var override = (typeof __super[name] === "function");
                    var hasSuperCall = fnTest.test(prop[name]);

                    if (isFunc && override && hasSuperCall) {
                        /* use .call(this, arguments) to call the super constructor */
                    } else if (isFunc && override && hasSuperCall) {
                        desc.value = _generate_method_value.bind(this)(name, prop[name]);
                        Object.defineProperty(prototype, name, desc);
                    } else if (isFunc) {
                        desc.value = prop[name];
                        Object.defineProperty(prototype, name, desc);
                    } else {
                        prototype[name] = prop[name];
                    }

                    if (isFunc) {
                        // Override registered getter/setter
                        var getter, setter, propertyName;
                        if (this.__getters__ && this.__getters__[name]) {
                            propertyName = this.__getters__[name];
                            this.__getters__.forEach(_generate_setters);
                        }
                        if (this.__setters__ && this.__setters__[name]) {
                            propertyName = this.__setters__[name];
                            this.__getters__.forEach(_generate_getters);
                        }
                    }
                }
            }
        }

        // add implementation method
        Class.implement = function (prop) {
            for (var name in prop) {
                prototype[name] = prop[name];
            }
        };

        SubClass.extend = this.extend;
        return SubClass;
    };
    module.exports = Class;
});