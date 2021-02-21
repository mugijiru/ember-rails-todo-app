# Ember-rails TODO App

[![Maintainability](https://api.codeclimate.com/v1/badges/c3402ad10334d8d06674/maintainability)](https://codeclimate.com/github/mugijiru/ember-rails-todo-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c3402ad10334d8d06674/test_coverage)](https://codeclimate.com/github/mugijiru/ember-rails-todo-app/test_coverage)

"Ember-rails TODO App" は ember-rails で作られた TODO アプリです。
ember-rails での実装例として作成されています。

# 注意

`ember-rails` がサポートしている Ember.js のバージョンは 2.18 までとなっています。
2.18 はもう Ember.js 自体のメンテナンス対象から外されているので
セキュリティ上の問題などを抱えているかもしれません。
そのため公開サーバへのデプロイはお控えください。

# Requirements

* Ruby version
  * 2.6.6

* Rails version
  * 5.2.4.4

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
