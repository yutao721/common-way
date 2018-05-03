/**
 * 数组方法类
 */


var array = {
    /**
     *
     * @param prop  根据number属性降序排列
     * @param rev   参数不传递，默认表示升序排序
     * @returns {Function}
     */
    compare: function (prop, rev) {
        if (rev == undefined) {
            rev = 1;
        } else {
            rev = (rev) ? 1 : -1;
        }

        return function (obj1, obj2) {
            var val1 = obj1[prop];
            var val2 = obj2[prop];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }
            if (val1 < val2) {
                return rev * -1;
            } else if (val1 > val2) {
                return rev * 1;
            } else {
                return 0;
            }
        }
    },
};
