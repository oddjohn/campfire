define(['lang/Class'], function (Class) {
    return Class.extend({
        constructor: function () {
            this.__date = new Date();
        },
        format: function (fmt) {
            var o = {
                "M+": this.__date.getMonth() + 1,
                "d+": this.__date.getDate(),
                "h+": this.__date.getHours() % 12 === 0 ? 12 : this.__date.getHours() % 12,
                "H+": this.__date.getHours(),
                "m+": this.__date.getMinutes(),
                "s+": this.__date.getSeconds(),
                "q+": Math.floor((this.__date.getMonth() + 3) / 3),
                "S": this.__date.getMilliseconds()
            };
            var week = {
                "0": "/u65e5",
                "1": "/u4e00",
                "2": "/u4e8c",
                "3": "/u4e09",
                "4": "/u56db",
                "5": "/u4e94",
                "6": "/u516d"
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (this.__date.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            if (/(E+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.__date.getDay() + ""]);
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        }
    });
});