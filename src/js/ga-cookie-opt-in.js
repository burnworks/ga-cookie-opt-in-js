window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  //localStorage から ga_cookie_opt_in の値を取得
  const cookieOptin = localStorage.getItem('ga_cookie_opt_in');

  //ga_cookie_opt_in = no なら Google Analytics を無効に
  if (cookieOptin == 'no') {
    console.log('ga_cookie_opt_in = no / ga-disable = true');
    //Disable Google Analytics（UA-XXXX-Y の部分は正しいものに書き換えてください）
    window['ga-disable-UA-XXXX-Y'] = true;

    //ga_cookie_opt_in = yes なら Google Analytics トラッキングコードを発行
  } else if (cookieOptin == 'yes') {
    console.log('ga_cookie_opt_in = yes');
    //Enable Google Analytics（UA-XXXX-Y の部分は正しいものに書き換えてください）
    window['ga-disable-UA-XXXX-Y'] = false;

    //ga_cookie_opt_in に値がない場合は一旦 Google Analytics を無効にして通知を表示
  } else {
    console.log('ga_cookie_opt_in = null');
    //Disable Google Analytics（UA-XXXX-Y の部分は正しいものに書き換えてください）
    window['ga-disable-UA-XXXX-Y'] = true;

    // ↓Google Web Fonts から Material Icons を読み込み（すでに別で読み込んでいる場合は削除可）↓
    const iconcss = document.createElement('link');
    iconcss.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    iconcss.setAttribute('rel', 'stylesheet');
    document.head.appendChild(iconcss);
    // ↑Google Web Fonts から Material Icons を読み込み（すでに別で読み込んでいる場合は削除可）↑
    // 通知バーのスタイル（パスは必要に応じて変更してください）
    const acceptcss = document.createElement('link');
    acceptcss.href = 'css/ga-cookie-opt-in.min.css';
    acceptcss.setAttribute('rel', 'stylesheet');
    document.head.appendChild(acceptcss);

    //通知の表示（テキストの内容やプライバシーポリシーへのリンクは必要に応じて変更してください）
    const accept = document.createElement('div');
    accept.setAttribute('class', 'module-ga-cookie-accept-bar');
    accept.setAttribute('id', 'name-ga-cookie-accept-bar');
    accept.innerHTML = '<p><i class="material-icons" aria-hidden="true">warning</i>このサイトでは Google アナリティクスの Cookie（クッキー）を使用して、ユーザーのWebサイト閲覧データを記録しています。<a href="./"><i class="material-icons" aria-hidden="true">chevron_right</i>プライバシーポリシーを確認</a></p><p><button id="name-ga-cookie-accept-btn" class="module-ga-cookie-accept-btn"><i class="material-icons" aria-hidden="true">check</i>同意して Cookie を受け入れる</button> <button id="name-ga-cookie-deny-btn" class="module-ga-cookie-accept-btn module-ga-cookie-deny-btn"><i class="material-icons" aria-hidden="true">close</i>同意しない</button></p>';
    document.body.appendChild(accept);
  }

  //各ボタンの取得
  const acceptBtn = document.getElementById('name-ga-cookie-accept-btn');
  const denyBtn = document.getElementById('name-ga-cookie-deny-btn');
  const resetBtn = document.getElementById('name-ga-cookie-reset-btn');

  //「同意する」ボタンのクリックでオプトイン（ga_cookie_opt_in = yes）
  if (acceptBtn) {
    acceptBtn.onclick = function () {
      localStorage.setItem('ga_cookie_opt_in', 'yes');
      document.getElementById('name-ga-cookie-accept-bar').classList.add('state-remove');
      //CSS Animation が完了するまで待機するための力技……
      window.setTimeout('window.location.reload(false)', 500);
    };
  }

  //「同意しない」ボタンのクリックでオプトアウト（ga_cookie_opt_in = no）
  if (denyBtn) {
    denyBtn.onclick = function () {
      localStorage.setItem('ga_cookie_opt_in', 'no');
      document.getElementById('name-ga-cookie-accept-bar').classList.add('state-remove');
      window.setTimeout('window.location.reload(false)', 500);
    };
  }

  //「設定をリセット」ボタンのクリックで ga_cookie_opt_in の値を削除
  if (resetBtn) {
    resetBtn.onclick = function () {
      localStorage.removeItem('ga_cookie_opt_in');
      location.reload();
    };
  }

});