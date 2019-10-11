/* eslint-disable */
// 通用js和css
// 判断class有无
function hasClass(ele, cls) {
  if (ele) {
    cls = cls || ''
    if (cls.replace(/\s/g, '').length == 0) return false // 当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ')
  }
}
// 添加class
function addClass(ele, cls) {
  if (!hasClass(ele, cls) && ele) {
    ele.className = ele.className == '' ? cls : ele.className + ' ' + cls
  }
}
// 去除class
function removeClass(ele, cls) {
  if (hasClass(ele, cls) && ele) {
    var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    ele.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
function currentPage() {
  var hiddenProperty = 'hidden' in document ? 'hidden' :
    'webkitHidden' in document ? 'webkitHidden' :
      'mozHidden' in document ? 'mozHidden' :
        null;
  var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
  var onVisibilityChange = function () {
    if (!document[hiddenProperty]) {
      console.log('页面激活');
    } else {
      console.log('页面非激活')

    }
  }
  document.addEventListener(visibilityChangeEvent, onVisibilityChange);
}


