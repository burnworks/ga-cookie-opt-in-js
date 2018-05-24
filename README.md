# ga-cookie-opt-in-js

Cookie 使用の同意を得てから Google Analytics のトラッキングを有効にする JavaScript のサンプル

## 詳しい解説

- [Cookie 使用の同意を得てから Google Analytics のトラッキングを有効にする - WWW Watch](https://hyper-text.org/archives/2018/05/google_analytics_cookie_opt_in.shtml)

## 使い方

- src/css/ga-cookie-opt-in.min.css をサーバの任意のディレクトリに設置します。
- src/js/ga-cookie-opt-in.js 内の「プロパティ ID」を修正、ga-cookie-opt-in.min.css のパスを設置した場所に修正の上、サーバの任意のディレクトリに設置します。
- src/js/ga-cookie-opt-in.js を body 要素内、もしくは head 要素内で読み込みます。
- Google Analytics のトラッキングコードは公式のものを別途設置してください。タグマネージャーからの配信も可能です。
- 必要に応じて .js ファイルや .css ファイルをカスタマイズしてください。

## 注意事項

本スクリプトはサンプルです。本番環境で使用した際に正しく動作しないなどといった場合でも一切責任は負いませんのであらかじめご了承ください。