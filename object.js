/**
 * 对象常用的方法
 */

var yObject = {
    /**
     * [复制一个对象]
     * @param  {[type]} ogj [要复制的对象]
     * @return {[type]}     [复制好的对象]
     */
    clone: function (ogj) {
        var o;
        if (typeof obj == "object") {
            if (obj === null) {
                o = null;
            } else {
                if (obj instanceof Array) {
                    o = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        o.push(clone(obj[i]));
                    }
                } else {
                    o = {};
                    for (var j in obj) {
                        o[j] = clone(obj[j]);
                    }
                }
            }
        } else {
            o = obj;
        }
        return o;
    },

    /**
     * [扩展对象函数]
     * @param  {[object]} target [目标对象]
     * @param  {[object]} obj    [要扩张的对象]
     * @return {[object]}        [扩张完的对象]
     */
    extend: function (target, obj) {
        for (var name in obj) {
            target[name] = obj[name];
        }
        return target;
    }

}
