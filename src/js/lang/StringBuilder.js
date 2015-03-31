define(function(require, exports, module) {
	function StringBuilder () {
		this.__strings = [];
	}
	StringBuilder.prototype.append = function(str) {
		this.__strings.push(str);
	};
	StringBuilder.prototype.toString = function() {
		return this.__strings.join("");
	};
	module.exports = StringBuilder;
});