# Ember-rails TODO App

[![Maintainability](https://api.codeclimate.com/v1/badges/c3402ad10334d8d06674/maintainability)](https://codeclimate.com/github/mugijiru/ember-rails-todo-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c3402ad10334d8d06674/test_coverage)](https://codeclimate.com/github/mugijiru/ember-rails-todo-app/test_coverage)

"Ember-rails TODO App" は
まず始めに ember-rails で作られ、そこから ember-cli-rails への移行を経た TODO アプリです。
ember-rails から ember-cli-rails への移行例として作成されています。

# 注意

`ember-rails` がサポートしている Ember.js のバージョンは 2.18 までとなっています。

こちらのアプリの main ブランチでは既に `ember-rails` は利用していませんが、
`ember-cli-rails` への移行を実演するのが目的であるため
`ember-rails` を利用して実装をしていました。
そして `ember-cli-rails` への移行を済ませた後も未だに 2.18 を利用しています。

2.18 はもう Ember.js 自体のメンテナンス対象から外されているので
セキュリティ上の問題などを抱えているかもしれません。
そのため公開サーバへのデプロイはお控えください。

# Requirements

* Ruby version
  * 2.6.6

* Rails version
  * 5.2.5

* System dependencies
  * MySQL 5.6 or later

# Development

* Database creation
  `rake db:create`

* Database initialization
  `rake db:migrate`

* How to run the test suite
  `rspec spec`

# Deploy について

動作する Ember.js のバージョンが 2.18 であり
サポート切れのバージョンであるため
一般公開しないでください。

開発者も公開する気がないためデプロイ手段は用意していません。
