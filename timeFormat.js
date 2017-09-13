/**
 * 时间格式处理
 */

var formatTime = {
  /**
   * [时间戳变为需要转化的时间格式]
   * @param  {[Number]} timestamp [需要转的时间戳]
   * @param  {[String]} format    [需要转化的时间格式]
   * @return {[String]}           [转化好的时间格式]
   *format格式如下:
   *             1."yyyy-MM-dd hh:mm:ss"
   *             2."yyyy年MM月dd日"
   *             3."MM/dd/yyyy"
   *             4."yyyyMMdd"
   *             5."hh:mm:ss"
   *
   */
  dataFormate: function(timestamp, format) {
    if (typeof value == 'string') value = Number(value);
    var date = new Date(value);
    var o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  },

  /**
   * [时间格式转时间戳]
   * @param  {[String]} time [需要转化的时间]
   * @return {[String]}      [时间戳]
   */
  timestampFormate: function(time) {
    return Date.parse(value)
  },

  /**
   * [获取前几天的时间]
   * @param  {[Number]} days [前几天的数字]
   * @return {[type]}      [description]
   */
  getDaysBefore: function(days) {
    var now = new Date();
    var date = new Date(now.getTime() - days * 24 * 3600 * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (isStart) {
      return year + '-' + month + '-' + day + ' ' + '00' + ':' + '00' + ':' + '00';
    } else {
      return year + '-' + month + '-' + day + ' ' + '23' + ':' + '59' + ':' + '59';
    }
  }


}
