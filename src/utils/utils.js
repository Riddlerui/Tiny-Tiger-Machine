export function getRequest(url) {
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

export function isBrowser() {
  let u = navigator.userAgent;
  window.browser = {};
  window.browser.iPhone = u.indexOf('iPhone') > -1; //iPhone or QQHD
  window.browser.android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android or uc
  window.browser.ios = u.match(/Mac OS/); //ios
  window.browser.wx = u.match(/MicroMessenger/);
  return window.browser;
}