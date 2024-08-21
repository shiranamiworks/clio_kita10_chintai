var dataStored;
window.addEventListener('DOMContentLoaded', function() {
  //ユーザの行動履歴の記録
  try {
    if ('localStorage' in window && window['localStorage'] !== null) {
      //重複動作回避
      if (typeof dataStored === 'undefined') {
        dataStored = true;
        setHistory();
      }
    }
  } catch (e) {
    console.log(e);
  }
  //提携サイト（特定のURL）からアクセスがあった場合
  // /www/common/get_siteurl.phpプログラムを利用してsite_idをcookieにセットする
  //来場、資料請求フォームでは /www/common/teikei.header.jsを読み込むことによって
  //提携サイトに対応したコンテンツを差し込む
  //site_idの判断は /lib/site_url.inc.phpにて定義
  function setCookie(cookie_name, siteUrl) {
    var ref = document.referrer;
    var url = location.href;
    var site_id = getCookie(cookie_name);
    if (!site_id) {
      for (var key in siteUrl) {
        if (ref.match(siteUrl[key])) {
          var tmp = cookie_name + '=' + escape(key) + '; ';
          tmp += 'path=/';
          document.cookie = tmp;
        }
      }

      for (var key in siteUrl) {
        if (url.match(siteUrl[key])) {
          var tmp = cookie_name + '=' + escape(key) + '; ';
          tmp += 'path=/';
          document.cookie = tmp;
        }
      }
    } else {
      //cookieが登録すみなので、上書きしません。
      console.log(url);
    }
  }
  $.getJSON('/common/get_siteurl.php', null, function(data, status) {
    // 通信成功時にデータを表示
    setCookie('site_id', data);
  });
  function getCookie(cookie_name) {
    cookie_name += '='; //
    thisCookie = document.cookie + ';';
    start = thisCookie.indexOf(cookie_name);
    if (start != -1) {
      end = thisCookie.indexOf(';', start);
      return unescape(thisCookie.substring(start + cookie_name.length, end));
    }
    return false;
  }
});

function setHistory(param, name) {
  if (!name) name = param;
  var formatDate = function(date) {
    return (
      date.getFullYear() +
      '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + date.getDate()).slice(-2) +
      ' ' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2) +
      ':' +
      ('0' + date.getSeconds()).slice(-2)
    );
  };
  var limit = 100;
  var data = [];
  var urlData = [];
  var date = new Date();
  var tempTitleArray;
  var title;
  title = document.title;
  tempTitleArray = title.split(/\|/);
  if (tempTitleArray.length > 1) {
    tempTitleArray.pop();
  }
  if (name) {
    tempTitleArray.push(' ' + name);
  }
  var title = tempTitleArray.join('');
  var href = location.href;
  if (param) {
    href = href + '#' + param;
  }
  //data =  JSON.parse(localStorage.getItem('urlData'));
  //console.log(title);
  //if(Array.isArray(data)){
  //	urlData = data;
  //}
  //urlData.push([formatDate(date),location.href,title]);
  //while(urlData.length > limit){
  //	urlData.shift();
  //}
  console.log(title);
  localStorage.setItem('urlData', JSON.stringify(urlData));
  $.post(
    '/search/sessionStore.php',
    { action: 'seturldata', urlData: [formatDate(date), href, title] },
    function(data) {
      //リクエストが成功した際に実行する関数
      console.log(data);
    }
  );
  $(document).on('click', '.gtm_click_trg', function() {
    var id = $(this).attr('id');
    setHistory(id);
  });
}
