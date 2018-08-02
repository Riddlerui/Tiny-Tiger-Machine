export function getDomainName() {
  //各种环境域名
  let box = {
    baseUrl: ''
  }
  
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  // if (hostname == 'localhost') {  //开发环境
  if (hostname == 'localhost'||hostname == '192.168.16.202') {  //开发环境
    box.baseUrl = '';
  } else {
    box.baseUrl = protocol + '//' + hostname;
  }
  return box;
}

