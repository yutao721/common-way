/**
 * url方法类
 */


var query = {
  /**
   * [获取url参数的值]
   * @param  {[string]} name 要获取的query参数
   * @return {[string]}      string | null
   *
   * eg:www.taobao.com?shopId=1766
   * getQueryString('shopId');//1766
   */
  getQueryString: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return null;
  }





};
