/**
 * 数字处理
 */

var DickMath = {

  /**
   * [得到一个范围内的随机数]
   * @param  {[Number]} min [最小数]
   * @param  {[Number]} max [最大数]
   * @return {[Number]}     [范围内的随机数]
   */
  randomNumber: function(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
  },


  /**
   * [时间号码4位之后加空格 15171407725 -> 151 7140 7725]
   * @param  {[String]} obj [11位手机号码]
   * @return {[String]}     [转化好的手机号码]
   */
  phoneNum: function(obj) {
    var value = obj.value;
    value = value.replace(/\s*/g, "");
    var result = [];
    for (var i = 0; i < value.length; i++) {
      if (i == 3 || i == 7) {
        result.push(" " + value.charAt(i));
      } else {
        result.push(value.charAt(i));
      }
    }
    obj.value = result.join("");
  };





}
