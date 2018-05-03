/**
 * 一些常用的方法
 */

var Base = {
    /**
     * [判断是否为微信浏览器]
     * @return {[Boolean]} [返回布尔值true或fasle]
     */
    isWeixin: function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (typeof WeixinJSBridge != "undefined" || ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    },


}
